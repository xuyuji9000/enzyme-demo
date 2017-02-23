import React from "react";
import ReactTestUtils from "react-addons-test-utils";
import expect from "expect";

import ItemList from "./ItemList";

describe("ItemList", function() {
    it("is a ul", function(){ 
        const renderer = ReactTestUtils.createRenderer();
        renderer.render(<ItemList></ItemList>);
        const result = renderer.getRenderOutput();

        expect(result.type).toBe("ul");
    });
});
