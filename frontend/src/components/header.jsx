export default function Header() {
    return (
        <>
            <header>
                <div className="nav">
                    <ul>
                        <li className="first_nav_item"><a href="/">{">"} подвальчик.host</a></li>
                        <li><a href="/services">услуги</a></li>
                        <li><a href="/faq">условия пользования</a></li>
                        <li><a href="/docs">документация</a></li>
                    </ul>
                </div>
            </header>
        </>
    );
}