import assert from "assert"
import TestUtils from "react/lib/ReactTestUtils"
import Component from "./index"
import React from "react"

it("<Link /> should render correctly", ()=> {

    const renderer = TestUtils.createRenderer();

    renderer.render(<Component label="My Title" href="#" />);
    const result = renderer.getRenderOutput();
    assert(TestUtils.isElement(result));
});
