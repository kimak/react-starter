import assert from "assert"
import TestUtils from "react/lib/ReactTestUtils"
import Component from "./index"
import React from "react"

it("<Button /> should be of type 'button'", ()=> {

    const renderer = TestUtils.createRenderer();

    renderer.render(<Component label="text"/>);
    const result = renderer.getRenderOutput();
    assert.equal(result.type,"button");
});
