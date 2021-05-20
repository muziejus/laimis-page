import * as React from "react"
import { Link } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"
import "./language-picker.css"

export default function LanguagePicker() {
  const { locale } = useLocalization();

  return (
    <div className="language-picker">
      { /(pt|lt)/.test(locale) &&
        <Link to="/">
          🇺🇸
          <span className="sr-only">EN</span>
        </Link>
      }
      { /(pt|en)/.test(locale) &&
        <Link to="/lt/">
          🇱🇹
          <span className="sr-only">LT</span>
        </Link>
      }
      { /(en|lt)/.test(locale) &&
        <Link to="/pt/">
          🇧🇷
          <span className="sr-only">PT</span>
        </Link>
      }
    </div>
  )

}
