import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, darkMode, onToggleTheme }) {
  return (
    <div className={`app-shell ${darkMode ? 'theme-dark' : 'theme-light'}`}>
      <Header darkMode={darkMode} onToggleTheme={onToggleTheme} />
      <main className="page-shell">{children}</main>
      <Footer />
    </div>
  )
}
