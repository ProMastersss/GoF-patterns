import { View } from "./View";

const view = new View();

//view.factoryMethod();
//view.abstractFactory();
//view.builder();
//view.prototype();
//view.singleton();

// view.adapter();
//view.decorator();
//view.proxy();
//view.bridge();
//view.composite();
//view.facade();
//view.flyweight();

//view.chain();
//view.command();
//view.iterator();
//view.mediator();
//view.memento();
//view.observer();
//view.state();
//view.strategy();
//view.template();
view.visitor();

document.getElementById("app").innerHTML = view.show();
