import assert from "assert"
import TestUtils from "react/lib/ReactTestUtils"
import Component from "./index"
import React from "react"

it("<Icon /> should be of type 'span'", ()=> {

    const renderer = TestUtils.createRenderer();

    renderer.render(<Component type="account" />);
    const result = renderer.getRenderOutput();
    assert.equal(result.type,"span");
});
