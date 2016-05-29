import assert from "assert"
import TestUtils from "react/lib/ReactTestUtils"
import Component from "./index"
import React from "react"

it("<Label /> should be of type 'span' by default", ()=> {

    const renderer = TestUtils.createRenderer();

    renderer.render(<Component value="label"/>);
    const result = renderer.getRenderOutput();
    assert.equal(result.type,"span");
});
