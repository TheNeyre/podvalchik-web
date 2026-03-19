'use client' // 👈 use it here
import React, { useState } from 'react';
import './rent.css'
import Header from '../components/header';

// Типы для параметров
interface TariffParams {
  ram: number;
  cores: number;
  disk: number;
  huynya: number;
}

const TariffCalculator: React.FC = () => {
  // Состояния
  const [ram, setRam] = useState<number>(4);
  const [cores, setCores] = useState<number>(2);
  const [disk, setDisk] = useState<number>(50);

  // Функции-хелперы
  const increment = (setter: React.Dispatch<React.SetStateAction<number>>, value: number, step: number = 1): void => {
    setter(value + step);
  };

  const decrement = (setter: React.Dispatch<React.SetStateAction<number>>, value: number, step: number = 1, min: number = 0): void => {
    setter(Math.max(min, value - step));
  };

  // Обработчики для инпутов
  const handleRamChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setRam(value);
    }
  };

  const handleCoresChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setCores(value);
    }
  };

  const handleDiskChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 10) {
      setDisk(value);
    }
  };

  // Вычисление суммы
  const calculateTotal = (): number => {
    return ram * 25 + cores * 50 + disk * 5;
  };

  return (
    <>
      <div className="absolute-block">
        <div className="tariff-parametrs-menu">
          <div className="tariff-currency-selector">
            {/* <button className="first-currency-selector" type="button">рубли</button>
            <button className="last-currency-selector" type="button">доллары</button> */}
            <div className="support-menu anim1">
              <a className="support-menu-button" href="#">Написать в поддержку за заказом</a>
            </div>
          </div>
        </div>
        
        <div className="tariff-calculator">
          <div className="output-calculator-panel">
            <label htmlFor="total">{calculateTotal()}</label><label className='output-calculator-text-currency'>рублей{"/"}мес.</label>
          </div>
          
          <div className="input-calculator-panel">
            {/* Оперативная память */}
            <ul className="param-preview">
              <li className="param-preview-text">Оперативная память</li>
              <li>
                <button 
                  className="param-edit-button" 
                  onClick={() => decrement(setRam, ram, 1, 1)}
                  type="button"
                >
                  {"<"}
                </button>
              </li>
              <li className="param-input-li">
                <input 
                  type="number" 
                  className="param-input" 
                  value={ram}
                  onChange={handleRamChange}
                  min="1"
                  step="1"
                />
              </li>
              <li>
                <button 
                  className="param-edit-button" 
                  onClick={() => increment(setRam, ram)}
                  type="button"
                >
                  {">"}
                </button>
              </li>
              <li className="param-comment-text">GB DDR3</li>
            </ul>

            {/* Ядра */}
            <ul className="param-preview">
              <li className="param-preview-text">Ядра</li>
              <li>
                <button 
                  className="param-edit-button" 
                  onClick={() => decrement(setCores, cores, 1, 1)}
                  type="button"
                >
                  {"<"}
                </button>
              </li>
              <li className="param-input-li">
                <input 
                  type="number" 
                  maxLength={3} 
                  className="param-input"
                  value={cores}
                  onChange={handleCoresChange}
                  min="1"
                  step="1"
                />
              </li>
              <li>
                <button 
                  className="param-edit-button" 
                  onClick={() => increment(setCores, cores)}
                  type="button"
                >
                  {">"}
                </button>
              </li>
              <li className="param-comment-text">pCPU</li>
            </ul>

            {/* Диск */}
            <ul className="param-preview">
              <li className="param-preview-text">Диск</li>
              <li>
                <button 
                  className="param-edit-button" 
                  onClick={() => decrement(setDisk, disk, 10, 10)}
                  type="button"
                >
                  {"<"}
                </button>
              </li>
              <li className="param-input-li">
                <input 
                  type="number" 
                  maxLength={3} 
                  className="param-input"
                  value={disk}
                  onChange={handleDiskChange}
                  min="10"
                  step="10"
                />
              </li>
              <li>
                <button 
                  className="param-edit-button" 
                  onClick={() => increment(setDisk, disk, 10)}
                  type="button"
                >
                  {">"}
                </button>
              </li>
              <li className="param-comment-text">GB</li>
            </ul>

            {/* Хуйня */}
            {/* <ul className="param-preview">
              <li className="param-preview-text">хуйня</li>
              <li>
                <button 
                  className="param-edit-button" 
                  onClick={() => decrement(setHuynya, huynya, 1, 0)}
                  type="button"
                >
                  {"<"}
                </button>
              </li>
              <li className="param-input-li">
                <input 
                  type="number" 
                  maxLength={3} 
                  className="param-input"
                  value={huynya}
                  onChange={handleHuynyaChange}
                  min="0"
                  step="1"
                />
              </li>
              <li>
                <button 
                  className="param-edit-button" 
                  onClick={() => increment(setHuynya, huynya)}
                  type="button"
                >
                  {">"}
                </button>
              </li>
              <li className="param-comment-text">хуйня</li>
            </ul> */}
          </div>
        </div>
      </div>
      <Header></Header>
    </>
  );
};

export default TariffCalculator;