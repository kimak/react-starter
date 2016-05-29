import React, { PropTypes } from "react";

const Close = (
    {
        width = 15,
        height = 15,
    }) =>

<svg width={width} height={height} fill="#959DAF" fill-rule="evenodd" viewBox="999 350 15 15" xmlns="http://www.w3.org/2000/svg">
  <path d="M1007.84 360.607l-1.77-1.768-1.767 1.767c-.488.488-1.28.488-1.767 0-.488-.488-.49-1.28 0-1.768l1.767-1.77-1.767-1.767c-.488-.488-.49-1.28 0-1.767.487-.488 1.28-.488 1.767 0l1.768 1.767 1.77-1.767c.487-.488 1.28-.488 1.767 0 .488.488.488 1.28 0 1.767l-1.768 1.768 1.767 1.77c.488.488.488 1.28 0 1.767-.49.488-1.28.488-1.768 0z" />
</svg>



Close.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
}

export default Close
