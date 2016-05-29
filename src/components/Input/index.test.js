import assert from "assert"
import TestUtils from "react/lib/ReactTestUtils"
import Component from "./index"
import React from "react"

it("<Input /> should be of type 'input'", ()=> {

    const renderer = TestUtils.createRenderer();

    renderer.render(<Component />);
    const result = renderer.getRenderOutput();
    assert.equal(result.type,"input");
});
