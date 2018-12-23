const Adapter = require("enzyme-adapter-react-16"),
  Enzyme = require("enzyme");

Enzyme.configure({ adapter: new Adapter() });
