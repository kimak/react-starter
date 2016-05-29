/* Intl settings local */
import {addLocaleData} from "react-intl";
import enIntl from "react-intl/locale-data/en";
import frIntl from "react-intl/locale-data/fr";
addLocaleData([...enIntl, ...frIntl]);

import fr from "assets/i18n/fr.json"
import en from "assets/i18n/en.json"
const translate = {fr,en}

const DEFAULT_LOCAL = "fr"

const selectLocale = (localeUrl)=>{
    let locale = localeUrl || window.navigator.userLanguage || window.navigator.language
    if(locale.length>1) locale = locale.substr(0,2);
    if(!translate[locale]){
        /* eslint-disable no-console */
        console.warn("The locale ",locale," is not available. Fallback with '"+DEFAULT_LOCAL+"' locale.")
        /* eslint-enable no-console */
        locale = DEFAULT_LOCAL
    }
    return locale
}

export default {
    get(localeUrl){
        const selectedLocale = selectLocale(localeUrl)
        return {
            locale: selectedLocale,
            messages: translate[selectedLocale],
        }
    }
}
