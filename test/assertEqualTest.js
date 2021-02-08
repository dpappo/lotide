const assertEqual = require("../assertEqual");

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// Comparing identical strings
assertEqual("kool", "kool");

// Comparing non-identical strings
assertEqual("kool", "aid");

// Comparing identical numbers
assertEqual(42, 42);

// Comparing non-identical numbers
assertEqual(42, 24);
