import { Human } from "./1.FactoryMethod/Human";
import { CarCreator } from "./1.FactoryMethod/Creators/CarCreator";
import { BicycleCreator } from "./1.FactoryMethod/Creators/BicycleCreator";
import { Human as Human2 } from "./2.AbstractFactory/Human";
import { CreatorWithWheels } from "./2.AbstractFactory/CreatorWithWheels";
import { CreatorWithoutWheels } from "./2.AbstractFactory/CreatorWithoutWheels";
import { MonowheelCreator } from "./1.FactoryMethod/Creators/MonowheelCreator";
import { TeamLead } from "./3.Builder/TeamLead";
import { Misha } from "./3.Builder/Misha";
import { Den } from "./3.Builder/Den";
import { Misha as Misha2 } from "./4.Prototype/Misha";
import { Den as Den2 } from "./4.Prototype/Den";
import { WorkingLaptop } from "./5.Singleton/WorkingLaptop";
import { Calculator } from "./6.Adapter/Calculator";
import { Adapter } from "./6.Adapter/Adapter";
import { User } from "./6.Adapter/User";
import { Calculator as Calculator2 } from "./7.Decorator/Calculator";
import { Decorator } from "./7.Decorator/Decorator";
import { Director } from "./8.Proxy/Director";
import { ZamDirector } from "./8.Proxy/ZamDirector";
import { Misha as Misha3 } from "./9.Bridge/Misha";
import { Pasha } from "./9.Bridge/Pasha";
import { Analytical } from "./9.Bridge/Analytical";
import { Support } from "./9.Bridge/Support";
import { Box } from "./10.Composite/Box";
import { Product } from "./10.Composite/Product";
import { Report } from "./11.Facade/Report";
import { CellFlyweightFactory } from "./12.Flyweight/CellFlyweightFactory";
import { RowFlyweightFactory } from "./12.Flyweight/RowFlyweightFactory";
import { Row } from "./12.Flyweight/Row";
import { Cell } from "./12.Flyweight/Cell";
import { I } from "./13.Chain/I";
import { Milk } from "./13.Chain/Products/Milk";
import { Telephone } from "./13.Chain/Products/Telephone";
import { Car } from "./13.Chain/Products/Car";
import { Push } from "./14.Command/Command/Push";
import { Pull } from "./14.Command/Command/Pull";
import { PHPStorm } from "./14.Command/PHPStorm";
import { Console } from "./14.Command/Console";
import { MyObject } from "./15.Iterator/MyObject";
import { ObjectIteratorFactory } from "./15.Iterator/ObjectIteratorFactory";
import { Pasha as Pasha2 } from "./16.Mediator/Pasha";
import { I as I2 } from "./17.Memento/I";
import { Human as Human3 } from "./18.Observer/Human";
import { Registrator } from "./18.Observer/Registrator";
import { IDE } from "./19.State/IDE";
import { Code as Code2 } from "./19.State/Code";
import { Code as Code3 } from "./20.Strategy/Code";
import { JS } from "./20.Strategy/JS";
import { PHP } from "./20.Strategy/PHP";
import { BoxOffice } from "./21.TemplateMethod/BoxOffice";
import { Product as Product2 } from "./21.TemplateMethod/Product";
import { BoxDiscountOffice } from "./21.TemplateMethod/BoxDiscoundOffice";
import { I as I4 } from "./22.Visitor/I";
import { Pyaterka } from "./22.Visitor/Pyaterka";
import { Magnit } from "./22.Visitor/Magnit";

export class View {
  private text: string = "";

  show(): string {
    return this.text;
  }

  factoryMethod(): void {
    const human = new Human(new CarCreator());
    //const human = new Human(new BicycleCreator());
    //const human = new Human(new MonowheelCreator());

    this.text = human.go();
  }

  abstractFactory(): void {
    //const human = new Human2(new CreatorWithWheels());
    //human.getOnBicycle();

    const human = new Human2(new CreatorWithoutWheels());
    human.getOnCar();

    this.text = human.go();
  }

  builder(): void {
    const teamLead = new TeamLead(new Misha());
    this.text = teamLead.implementAllFactories();

    // const teamLead = new TeamLead(new Den());
    //this.text = teamLead.implementArchitecture();
  }

  prototype(): void {
    //const employee = new Misha2("echo 'Hello World';");
    const employee = new Den2("echo 'Привет Алтай';");

    const code = employee.copyCode();

    this.text = code.code;
  }

  singleton() {
    const laptop = WorkingLaptop.take();
    const againTakeLaptop = WorkingLaptop.take();
    const anotherlaptop = new WorkingLaptop();

    this.text =
      laptop === anotherlaptop ? "Один и тот же ноут" : "Ты взял чужой ноут";
  }

  adapter() {
    const calculator = new Calculator(1, 2);
    const adapter = new Adapter(calculator);

    this.text = new User().operation(adapter).toString();
  }

  decorator() {
    const calculator = new Calculator2(12, 25);
    const decorator = new Decorator(calculator);

    this.text = decorator.calculate();
  }

  proxy() {
    const director = new Director(true);
    const zam = new ZamDirector(director);

    zam.resolveIssue();
  }

  bridge() {
    const employee = new Misha3();
    const employee2 = new Pasha();

    let departmentAnalytical = new Analytical(employee);
    departmentAnalytical.work();

    departmentAnalytical = new Analytical(employee2);
    departmentAnalytical.work();

    let departmentSupport = new Support(employee);
    departmentSupport.work();

    departmentSupport = new Support(employee2);
    departmentSupport.work();
  }

  composite() {
    const product = new Product();

    const boxes1 = new Box("СДЭК");
    const boxes2 = new Box("СДЭК");
    const boxes3 = new Box("СДЭК");
    boxes1.add(product);
    boxes2.add(boxes1);
    boxes3.add(boxes2);

    const boxes4 = new Box("Деловые линии");
    boxes4.add(product);

    // груз
    const cargo = new Box("Груз");
    cargo.add(boxes3);
    cargo.add(boxes4);

    cargo.open();
  }

  facade() {
    const report = new Report();

    this.text = report.generate();
  }

  flyweight() {
    const cellFactory = new CellFlyweightFactory();
    const rowFactory = new RowFlyweightFactory();

    const matrix = [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0],
      [1, 1, 0]
    ];

    const matrixRow: Row[] = [];

    matrix.forEach((row: number[]) => {
      const cell1 = cellFactory.create(row[0] as 0 | 1);
      const cell2 = cellFactory.create(row[1] as 0 | 1);
      const cell3 = cellFactory.create(row[2] as 0 | 1);
      const rowObj = rowFactory.create([cell1, cell2, cell3]);
      matrixRow.push(rowObj);
    });

    console.log("Уникальных ячеек");
    console.log(cellFactory.getUniqueCount());
    console.log("Уникальных строк");
    console.log(rowFactory.getUniqueCount());

    console.log(matrixRow[1] === matrixRow[3]);
    console.log(matrixRow[1] === matrixRow[2]);
  }

  chain() {
    const i = new I(200000);
    const milk = new Milk();
    const telephone = new Telephone();
    const car = new Car();

    milk.setNextProduct(telephone);
    telephone.setNextProduct(car);

    milk.buy(i);
  }

  command() {
    const console = new Console();
    const push = new Push(console);
    const pull = new Pull(console);
    const ide = new PHPStorm([push, pull]);

    ide.executeComands();
  }

  iterator() {
    const myObject = new MyObject();
    const iterator = new ObjectIteratorFactory().create(myObject);

    iterator.next();
    iterator.next();
    iterator.next();
    iterator.next();
    iterator.next();
    iterator.next();
    iterator.next();
    iterator.next();
  }

  mediator() {
    const pasha = new Pasha2();

    pasha.notify("error");
    pasha.notify("json");
    pasha.notify("bug");
  }

  memento() {
    const i = new I2();

    i.determineThreeNumber();
    i.rememberNumber(2);

    this.text = "Второе число было: " + i.getNumber().toString();
  }

  observer() {
    const human = new Human3(0);
    const human1 = new Human3(1);
    const human2 = new Human3(2);
    const human3 = new Human3(3);

    const registrator = new Registrator();
    registrator.subscribe(human);
    registrator.subscribe(human1);
    registrator.subscribe(human2);
    registrator.subscribe(human3);

    registrator.declare();

    setTimeout(() => {
      registrator.unsubscribe(human2);
    }, 1000);
  }

  state() {
    const code = new Code2("echo 'Hello world';");
    const ide = new IDE(code);

    ide.compile();
  }

  strategy() {
    const code = new Code3("Какой то код");
    code.setFileName("autorization");

    code.setExtencion(new JS());
    code.save();

    code.setExtencion(new PHP());
    code.save();
  }

  template() {
    const boxOffice = new BoxOffice(
      new Product2("Конфетка", 500),
      new Product2("Мороженое", 50),
      new Product2("Молоко", 75)
    );

    this.text = "Сумма: " + boxOffice.amount().toString();

    const boxOfficeDiscont = new BoxDiscountOffice(
      new Product2("Конфетка", 500),
      new Product2("Мороженое", 50),
      new Product2("Молоко", 75)
    );

    this.text +=
      "<br>Сумма со скидкой: " + boxOfficeDiscont.amount().toString();
  }

  visitor() {
    const pyaterka = new Pyaterka();
    const magnit = new Magnit();
    const i = new I4();

    i.visitMagnit(magnit);
    i.visitPyaterka(pyaterka);
  }
}
