import * as React from "react"
import { Link } from "gatsby"
import { useLocalization } from "gatsby-theme-i18n"
import "./language-picker.css"

export default function LanguagePicker() {
  const { locale } = useLocalization();

  console.log(locale);

  return (
    <div className="language-picker">
      { /(pt|lt)/.test(locale) &&
        <Link to="/">
          <span role="img" aria-label="English language">
          🇺🇸
          </span>
        </Link>
      }
      { /(pt|en)/.test(locale) &&
        <Link to="/lt/">
          <span role="img" aria-label="Lithuanian language">
          🇱🇹
          </span>
        </Link>
      }
      { /(en|lt)/.test(locale) &&
        <Link to="/pt/">
          <span role="img" aria-label="Portuguese language">
          🇧🇷
          </span>
        </Link>
      }
    </div>
  )

}
