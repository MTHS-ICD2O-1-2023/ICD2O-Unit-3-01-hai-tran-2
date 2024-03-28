

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: March 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a trapezoid.
 */
function calculateArea() {
  // input
  const baseAOfTrapezoid = parseFloat(document.getElementById('base-a').value)
  const baseBOfTrapezoid = parseFloat(document.getElementById('base-b').value)
  const heightOfTrapezoid = parseFloat(document.getElementById('height').value)

  // process
  const areaOfTrapezoid = (baseAOfTrapezoid + baseBOfTrapezoid) / 2 * heightOfTrapezoid
  // output
  document.getElementById('answer').innerHTML = "The area is: " + areaOfTrapezoid + " mm²"
}
