import React from "react";
import { shallow } from "enzyme";
import MyComponent from "./MyComponent";
import Foo from "./Foo";

describe("<MyComponent/>",function(){
    it("render three <Foo /> components", function(){
        const wrapper = shallow(<MyComponent></MyComponent>);
        expect(wrapper.find(Foo)).toHaveLength(3);
    });
});
