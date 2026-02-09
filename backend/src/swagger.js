import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Определение схем OpenAPI
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API для управления заметками',
    version: '1.0.0',
    description: 'Простое REST API для создания, чтения, обновления и удаления заметок',
    contact: {
      name: 'Разработчик API',
      email: 'dev@example.com'
    },
    license: {
      name: 'MIT',
      url: 'https://opensource.org/licenses/MIT'
    }
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Локальный сервер разработки'
    },
    {
      url: 'https://api.example.com',
      description: 'Продакшен сервер'
    }
  ],
  tags: [
    {
      name: 'Заметки',
      description: 'Операции с заметками'
    },
    {
      name: 'Системные',
      description: 'Системные endpoints'
    }
  ],
  components: {
    schemas: {
      Note: {
        type: 'object',
        required: ['title', 'text', 'author'],
        properties: {
          id: {
            type: 'integer',
            example: 1,
            description: 'Уникальный идентификатор заметки'
          },
          title: {
            type: 'string',
            example: 'Моя первая заметка',
            description: 'Заголовок заметки',
            minLength: 1,
            maxLength: 100
          },
          text: {
            type: 'string',
            example: 'Это содержимое моей заметки...',
            description: 'Текст заметки',
            minLength: 1
          },
          author: {
            type: 'string',
            example: 'Иван Иванов',
            description: 'Автор заметки',
            minLength: 1,
            maxLength: 50
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
            example: '2023-10-01T12:00:00.000Z',
            description: 'Дата и время создания'
          },
          updatedAt: {
            type: 'string',
            format: 'date-time',
            example: '2023-10-02T14:30:00.000Z',
            description: 'Дата и время последнего обновления'
          }
        }
      },
      NoteInput: {
        type: 'object',
        required: ['title', 'text', 'author'],
        properties: {
          title: {
            type: 'string',
            example: 'Моя первая заметка',
            description: 'Заголовок заметки'
          },
          text: {
            type: 'string',
            example: 'Это содержимое мой заметки...',
            description: 'Текст заметки'
          },
          author: {
            type: 'string',
            example: 'Иван Иванов',
            description: 'Автор заметки'
          }
        }
      },
      NoteUpdate: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            example: 'Обновленный заголовок',
            description: 'Новый заголовок заметки'
          },
          text: {
            type: 'string',
            example: 'Обновленный текст заметки...',
            description: 'Новый текст заметки'
          },
          author: {
            type: 'string',
            example: 'Петр Петров',
            description: 'Новый автор заметки'
          }
        }
      },
      SuccessResponse: {
        type: 'object',
        properties: {
          success: {
            type: 'boolean',
            example: true
          },
          message: {
            type: 'string',
            example: 'Операция выполнена успешно'
          },
          data: {
            oneOf: [
              { $ref: '#/components/schemas/Note' },
              { type: 'array', items: { $ref: '#/components/schemas/Note' } }
            ]
          },
          count: {
            type: 'integer',
            example: 5
          }
        }
      },
      ErrorResponse: {
        type: 'object',
        properties: {
          success: {
            type: 'boolean',
            example: false
          },
          message: {
            type: 'string',
            example: 'Произошла ошибка'
          }
        }
      }
    },
    securitySchemes: {
      BearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  },
  paths: {}
};

// Опции для swagger-jsdoc
const options = {
  swaggerDefinition,
  apis: [], // Пути к файлам с JSDoc комментариями (если будут использоваться)
};

// Генерируем спецификацию
const swaggerSpec = swaggerJsdoc(options);

// Расширяем спецификацию описанием endpoints
swaggerSpec.paths = {
  '/': {
    get: {
      tags: ['Системные'],
      summary: 'Проверка работы сервера',
      description: 'Возвращает приветственное сообщение и список доступных endpoints',
      responses: {
        200: {
          description: 'Сервер работает',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  message: { type: 'string' },
                  endpoints: { type: 'object' },
                  instructions: { type: 'string' }
                }
              },
              example: {
                message: 'Добро пожаловать в API для заметок!',
                endpoints: {
                  getAllNotes: 'GET /notes',
                  getOneNote: 'GET /notes/:id',
                  createNote: 'POST /notes',
                  updateNote: 'PUT /notes/:id',
                  deleteNote: 'DELETE /notes/:id'
                },
                instructions: 'Используйте Postman или curl для тестирования API'
              }
            }
          }
        }
      }
    }
  },
  '/notes': {
    get: {
      tags: ['Заметки'],
      summary: 'Получить все заметки',
      description: 'Возвращает список всех заметок с пагинацией',
      parameters: [
        {
          name: 'page',
          in: 'query',
          description: 'Номер страницы',
          required: false,
          schema: {
            type: 'integer',
            minimum: 1,
            default: 1
          }
        },
        {
          name: 'limit',
          in: 'query',
          description: 'Количество заметок на странице',
          required: false,
          schema: {
            type: 'integer',
            minimum: 1,
            maximum: 100,
            default: 10
          }
        }
      ],
      responses: {
        200: {
          description: 'Список заметок успешно получен',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SuccessResponse'
              },
              example: {
                success: true,
                data: [
                  {
                    id: 1,
                    title: 'Первая заметка',
                    text: 'Содержимое первой заметки',
                    author: 'Иван Иванов',
                    createdAt: '2023-10-01T12:00:00.000Z',
                    updatedAt: '2023-10-01T12:00:00.000Z'
                  },
                  {
                    id: 2,
                    title: 'Вторая заметка',
                    text: 'Содержимое второй заметки',
                    author: 'Петр Петров',
                    createdAt: '2023-10-02T14:30:00.000Z',
                    updatedAt: '2023-10-02T14:30:00.000Z'
                  }
                ],
                count: 2
              }
            }
          }
        },
        500: {
          description: 'Внутренняя ошибка сервера',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse'
              },
              example: {
                success: false,
                message: 'Произошла внутренняя ошибка сервера'
              }
            }
          }
        }
      }
    },
    post: {
      tags: ['Заметки'],
      summary: 'Создать новую заметку',
      description: 'Создает новую заметку с указанными данными',
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/NoteInput'
            },
            example: {
              title: 'Новая заметка',
              text: 'Содержимое новой заметки...',
              author: 'Иван Иванов'
            }
          }
        }
      },
      responses: {
        201: {
          description: 'Заметка успешно создана',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SuccessResponse'
              },
              example: {
                success: true,
                message: 'Заметка успешно создана',
                data: {
                  id: 3,
                  title: 'Новая заметка',
                  text: 'Содержимое новой заметки...',
                  author: 'Иван Иванов',
                  createdAt: '2023-10-03T10:15:00.000Z',
                  updatedAt: '2023-10-03T10:15:00.000Z'
                }
              }
            }
          }
        },
        400: {
          description: 'Неверные данные запроса',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse'
              },
              example: {
                success: false,
                message: 'Пожалуйста, заполните все поля: title, text, author'
              }
            }
          }
        },
        500: {
          description: 'Внутренняя ошибка сервера'
        }
      }
    }
  },
  '/notes/{id}': {
    get: {
      tags: ['Заметки'],
      summary: 'Получить заметку по ID',
      description: 'Возвращает заметку по указанному идентификатору',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'ID заметки',
          required: true,
          schema: {
            type: 'integer',
            minimum: 1
          }
        }
      ],
      responses: {
        200: {
          description: 'Заметка успешно найдена',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SuccessResponse'
              },
              example: {
                success: true,
                data: {
                  id: 1,
                  title: 'Первая заметка',
                  text: 'Содержимое первой заметки',
                  author: 'Иван Иванов',
                  createdAt: '2023-10-01T12:00:00.000Z',
                  updatedAt: '2023-10-01T12:00:00.000Z'
                }
              }
            }
          }
        },
        404: {
          description: 'Заметка не найдена',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse'
              },
              example: {
                success: false,
                message: 'Заметка с таким ID не найдена'
              }
            }
          }
        },
        400: {
          description: 'Неверный формат ID'
        },
        500: {
          description: 'Внутренняя ошибка сервера'
        }
      }
    },
    put: {
      tags: ['Заметки'],
      summary: 'Обновить заметку',
      description: 'Обновляет существующую заметку по указанному ID',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'ID заметки для обновления',
          required: true,
          schema: {
            type: 'integer',
            minimum: 1
          }
        }
      ],
      requestBody: {
        required: true,
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/NoteUpdate'
            },
            example: {
              title: 'Обновленный заголовок',
              text: 'Обновленное содержимое заметки...',
              author: 'Петр Петров'
            }
          }
        }
      },
      responses: {
        200: {
          description: 'Заметка успешно обновлена',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SuccessResponse'
              },
              example: {
                success: true,
                message: 'Заметка успешно обновлена',
                data: {
                  id: 1,
                  title: 'Обновленный заголовок',
                  text: 'Обновленное содержимое заметки...',
                  author: 'Петр Петров',
                  createdAt: '2023-10-01T12:00:00.000Z',
                  updatedAt: '2023-10-03T15:45:00.000Z'
                }
              }
            }
          }
        },
        400: {
          description: 'Неверные данные запроса',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse'
              }
            }
          }
        },
        404: {
          description: 'Заметка не найдена',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse'
              },
              example: {
                success: false,
                message: 'Заметка с таким ID не найдена'
              }
            }
          }
        },
        500: {
          description: 'Внутренняя ошибка сервера'
        }
      }
    },
    delete: {
      tags: ['Заметки'],
      summary: 'Удалить заметку',
      description: 'Удаляет заметку по указанному ID',
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: 'ID заметки для удаления',
          required: true,
          schema: {
            type: 'integer',
            minimum: 1
          }
        }
      ],
      responses: {
        200: {
          description: 'Заметка успешно удалена',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/SuccessResponse'
              },
              example: {
                success: true,
                message: 'Заметка успешно удалена',
                data: {
                  id: 1,
                  title: 'Первая заметка',
                  text: 'Содержимое первой заметки',
                  author: 'Иван Иванов',
                  createdAt: '2023-10-01T12:00:00.000Z',
                  updatedAt: '2023-10-01T12:00:00.000Z'
                }
              }
            }
          }
        },
        404: {
          description: 'Заметка не найдена',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/ErrorResponse'
              },
              example: {
                success: false,
                message: 'Заметка с таким ID не найдена'
              }
            }
          }
        },
        500: {
          description: 'Внутренняя ошибка сервера'
        }
      }
    }
  }
};

// Функция для настройки Swagger UI
const setupSwagger = (app) => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  
  // Дополнительный endpoint для получения сырой спецификации JSON
  app.get('/docs.json', (_, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
  
  console.log('📚 Swagger документация доступна по адресу: http://localhost:3000/docs');
  console.log('📄 Swagger спецификация доступна по адресу: http://localhost:3000/docs.json');
};

export default setupSwagger;
