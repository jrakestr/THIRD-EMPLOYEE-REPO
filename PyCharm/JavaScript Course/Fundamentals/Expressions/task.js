// write a function a() that returns the literal value corresponding to the
// expression "" + 1 + 1
function a() {
  return "11";
}
// do the same for the expression "" - 1 + 1
function b() {
  return 0; /* Add the literal value for the expression */;
}

// do the same for the expression true + false
function c() {
  return 1; /* Add the literal value for the expression */;
}

// do the same for the expression 6 / "3"
function d() {
  return 2; /* Add the literal value for the expression */;
}

// do the same for the expression "2" * "3"
function e() {
  return 6; /* Add the literal value for the expression */;
}

// do the same for the expression 4 + 5 + "px"
function f() {
  return "9px";
}

// do the same for the expression "$" + 4 + 5
function g() {
  return "$45"; /* Add the literal value for the expression */
}

// do the same for the expression "4" - 2
function h() {
  return 2; /* Add the literal value for the expression */;
}

// do the same for the expression "4px" - 2
function i() {
  return NaN;  /* Add the literal value for the expression */;
}

// do the same for the expression "  -9  " + 5
function j() {
  return "  -9  5"; /* Add the literal value for the expression */;
}

// do the same for the expression "  -9  " - 5
function k() {
  return -14; /* Add the literal value for the expression */;
}

// do the same for the expression null + 1
function l() {
  return null + 1; /* Add the literal value for the expression */;
}

// do the same for the expression undefined + 1
function m() {
  return NaN; /* Add the literal value for the expression */;
}

// do the same for the expression " \t \n" - 2
function n() {
  return " \t \n" - 2; /* Add the literal value for the expression */;
}

// do the same for the expression 2 < 12
function o() {
  return 2 < 12; /* Add the literal value for the expression */;
}

// do the same for the expression "2" < "12"
function p() {
  return "2" < "12"; /* Add the literal value for the expression */;
}

// do the same for the expression "2" == 2
function q() {
  return "2" == 2; /* Add the literal value for the expression */;
}

// do the same for the expression "2" === 2
function r() {
  return "2" === 2; /* Add the literal value for the expression */;
}

// do the same for the expression isNaN(2)
function s() {
  return isNaN(2); /* Add the literal value for the expression */;
}

// do the same for the expression isNaN("2")
function t() {
  return isNaN("2"); /* Add the literal value for the expression */;
}
