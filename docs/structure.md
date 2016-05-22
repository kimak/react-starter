## Structure sample
```
src/
  /actions
  /config
  /consts
  	/actions.js
  /i18n
  	/index.js
  /components
  	/Input
  		/index.js
  		/index.css
  		/__tests__/index.js
  	/Bubble
  		/index.js (import Header from "./Header")
  		/index.css
  		/__tests__/index.js
  		/Header
  			/index.js (import Subtitle from "../Subtitle")
  			/index.css
  			/__tests__/index.js
  			(!create sub component here is forbidden!)
  		/Subtitle
  /containers
  	/App
  		/index.js
  		/index.css
  		/__tests__/index.js
  	/PageHome
  /contexts
  /css
  /helpers
  /managers
  /reducers
  /selectors
  	/isMandatoryDataReady.js
  index.js
  routes.js
  store.js
  index.tpl.html
package.json
```
