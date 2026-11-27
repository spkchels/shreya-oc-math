window.OC_PAPERS = window.OC_PAPERS || {};
(function () {
  const F = window.OC_FIG_T3;
  const cube = (a, b, c) => F.cubeView(a, b, c);
  const tri = (up, down, hl) => F.triangleGrid(up, down, hl);

  window.OC_PAPERS.t3 = {
    id: "t3",
    stamp: "T3 Mathematical reasoning",
    title: "Twenty-one questions from the third set of misses",
    blurb: "Order of operations, compass turns, time zones, symmetry, number patterns, balances, and reading charts.",
    minutes: 26,
    topics: [
      "Undo and redo a rule", "Order of operations", "Compass turns and distance", "Area of a path",
      "Dates and days of the week", "Rectangle from area and ratio", "Best buy", "Reading a population pyramid",
      "Third vertex of a right triangle", "Symmetry in a triangle grid", "Square pyramid of blocks", "Time zones",
      "Volume of a hollow", "Number pyramid", "Rule in corner numbers", "Folding a net", "Probability of or",
      "Balance scales", "Joins and pieces", "Percent change in perimeter"
    ],
    questions: [
      {
        id: 1,
        topic: "Undo and redo a rule",
        stem: `<p>Jake started with a number, multiplied it by 6 and added 2. He ended up with 146.</p>
          <p>He then realised he was supposed to divide the original number by 6, then subtract 2. What answer should he have got?</p>`,
        options: ["2", "3", "4", "5", "73"],
        answer: 0,
        foundation: "To find the starting number, work backwards and undo each step with its opposite: undo +2 with −2, undo ×6 with ÷6. Then run the correct rule forwards on that starting number.",
        steps: "146 − 2 = 144. 144 ÷ 6 = 24, so the original number is 24. Correct rule: 24 ÷ 6 = 4, then 4 − 2 = 2.",
        fast: "Two short lines: (146 − 2) ÷ 6 = 24, then 24 ÷ 6 − 2 = 2. Write the original number down before you do anything else.",
        traps: "Applying the new rule to 146 instead of 24. Picking 73 (146 ÷ 2). Forgetting to undo the +2 first, which gives 146 ÷ 6 and a messy number.",
        similar: "Any 'he did the wrong steps' question: undo the wrong steps backwards to get the start, then do the right steps forwards. Check by running the wrong rule on your start number."
      },
      {
        id: 2,
        topic: "Order of operations",
        stem: `<p>Which of the following number sentences is incorrect?</p>`,
        options: [
          "(3 + 4)² − 15 ÷ 3 = 44",
          "15 ÷ 3 × 2 − 2 × 2 = 6",
          "2 × 4² − 10 ÷ 2 + 4 = 31",
          "50 − 10 × 2² = 160",
          "9 × 6 = 6 × 3²"
        ],
        answer: 3,
        foundation: "Order of operations: brackets, then indices (powers), then × and ÷ from left to right, then + and − from left to right. A power applies only to the number right next to it.",
        steps: "A: 7² = 49, 15 ÷ 3 = 5, 49 − 5 = 44, correct. B: 15 ÷ 3 = 5, 5 × 2 = 10, 2 × 2 = 4, 10 − 4 = 6, correct. C: 2 × 16 = 32, 10 ÷ 2 = 5, 32 − 5 + 4 = 31, correct. D: 2² = 4, 10 × 4 = 40, 50 − 40 = 10, not 160, so D is incorrect. E: 54 = 6 × 9, correct.",
        fast: "Spot the sentence whose size looks wrong. 50 minus something positive cannot reach 160. That is D, and a quick check of the others confirms it.",
        traps: "Subtracting first: (50 − 10) × 4 = 160 is the mistake the question is built on. Doing the + before the ÷ in C. Working left to right ignoring × and ÷ priority in B.",
        similar: "Test each option with the order BIDMAS. Look first for answers that are the wrong size, then verify them."
      },
      {
        id: 3,
        topic: "Compass turns and distance",
        stem: `<p>Steve starts his afternoon bike ride by going north for 2 km. He turns 90 degrees to his left and rides for 1 km, before making a 90 degree turn to his right and riding for another 1 km. However, the uphill slope was too steep so he turned left and rode for 3 km. He finally makes a turn left and travels another 2 km.</p>
          <p>How many km has he travelled thus far and which direction should he go so he would be directly facing his original position?</p>`,
        options: ["9 km, SE", "7 km, NW", "9 km, E", "7 km, SW", "5 km, NE"],
        answer: 2,
        foundation: "Left and right depend on the way you are facing. Facing north, left is west. Facing west, left is south and right is north. Track a position on a grid and add every leg for distance travelled, not the straight-line distance.",
        steps: "Start (0, 0), north 2 km to (0, 2). Turn left (west) 1 km to (−1, 2). Turn right (now north) 1 km to (−1, 3). Turn left (west) 3 km to (−4, 3). Turn left (south) 2 km to (−4, 1). Distance travelled = 2 + 1 + 1 + 3 + 2 = 9 km. To get back to (0, 0) he must go 4 km east and 1 km south, which is almost due east. E is the closest option.",
        fast: "Add every leg for the distance: 9 km. That removes the two 7 km options and the 5 km option at once. Then judge the way home: 4 across, only 1 down, so east.",
        traps: "Using the straight-line distance. Treating 'left' as always west. SE would be right if he were as far south as he is west, which is not so here (4 west, 1 north).",
        similar: "Draw an arrow showing the way you face after each turn. Write the position after each leg. The way home is the opposite of the sum of the moves."
      },
      {
        id: 4,
        topic: "Area of a path",
        stem: `<p>Abby wanted to pave a path around her garden with tiles. The tiles are squares with length 5 m and the garden has dimensions 20 m × 10 m. What is the area of all the tiles?</p>`,
        fig: F.garden(),
        options: ["400 m²", "600 m²", "200 m²", "300 m²", "500 m²"],
        answer: 0,
        foundation: "Area of a border = area of the big shape minus area of the inside shape. The border adds the path width on both sides, so each side of the garden grows by 2 × 5 m, not 5 m.",
        steps: "Outer rectangle: (20 + 10) × (10 + 10) = 30 × 20 = 600 m². Garden: 20 × 10 = 200 m². Tiles = 600 − 200 = 400 m².",
        fast: "Add the path width twice to each side, multiply, subtract the garden. 30 × 20 − 20 × 10.",
        traps: "Adding 5 once to each side (25 × 15 = 375 − 200 = 175). Answering 600 (the outer area). Finding the perimeter of the garden times 5, which misses the four corners.",
        similar: "Frame, border, path or picture-frame questions: big minus small. Add the border to both ends of each side."
      },
      {
        id: 5,
        topic: "Dates and days of the week",
        stem: `<p>Angus was born on Monday 17th July 1978. His son was born on the 4th of April 2002. On what day was his son born and how old was Angus when his son was born?</p>`,
        options: ["Thursday, 24 years old", "Thursday, 23 years old", "Wednesday, 24 years old", "Wednesday, 23 years old", "Tuesday, 22 years old"],
        answer: 1,
        foundation: "An age is the number of birthdays that have passed. A normal year moves the weekday on by 1 and a leap year by 2 (365 = 52 weeks + 1 day). Count leap days between the dates.",
        steps: "Age: 2002 − 1978 = 24, but the birthday is in July and the birth is in April, so he is still 23. Day: 17 July 1978 to 17 July 2001 is 23 years including 6 leap days (1980, 84, 88, 92, 96, 2000). Shift = 23 + 6 = 29, and 29 ÷ 7 leaves 1, so 17 July 2001 is Tuesday. From 17 July 2001 to 4 April 2002 is 261 days. 261 ÷ 7 leaves 2, so Tuesday + 2 = Thursday.",
        fast: "Age first: the April date is before the July birthday, so 23. That leaves B or D. Then only the weekday is left to decide between Thursday and Wednesday.",
        traps: "Forgetting the birthday has not happened yet (24). Missing a leap year in the count (1980, 84, 88, 92, 96 and 2000 are all leap years) and ending up one day out.",
        similar: "Anchor to the same date in a later year, add year shifts using 1 per year plus 1 per leap day, then finish with the remaining days mod 7."
      },
      {
        id: 6,
        topic: "Rectangle from area and ratio",
        stem: `<p>If the length of a rectangle is thrice its width and the area is 48 cm², what is the rectangle's length?</p>`,
        options: ["4 cm", "7 cm", "12 cm", "15 cm", "18 cm"],
        answer: 2,
        foundation: "Area = length × width. If length = 3 × width, the rectangle is three equal squares in a row: area = 3 × (width × width). So width² = area ÷ 3.",
        steps: "Width² = 48 ÷ 3 = 16, so width = 4 cm. Length = 3 × 4 = 12 cm. Check: 12 × 4 = 48.",
        fast: "Find a factor pair of 48 where one side is three times the other: 4 × 12. The longer side is the length.",
        traps: "Giving the width (4 cm). Dividing 48 by 3 and stopping at 16. Choosing 18 because 3 × 6 = 18 (area would be 108).",
        similar: "Ratio and area: split the long side into equal parts, find the area of one part, take the square root. Always answer the side the question asks for."
      },
      {
        id: 7,
        topic: "Best buy",
        stem: `<p>A certain supermarket sells beans in 4 different quantities. Which of the four deals is the best buy?</p>`,
        options: ["$3.60/kg", "$1.75/500 g", "$1.33/400 g", "$6.80/2 kg", "$1.00/250 g"],
        answer: 2,
        foundation: "Compare prices on the same unit. Convert every deal to dollars per kilogram. The lowest price per kilogram is the best buy.",
        steps: "A: $3.60 per kg. B: $1.75 × 2 = $3.50 per kg. C: $1.33 × 2.5 = $3.325 per kg. D: $6.80 ÷ 2 = $3.40 per kg. E: $1.00 × 4 = $4.00 per kg. The cheapest is C.",
        fast: "Use 1 kg as the base. For 500 g double, for 250 g quadruple, for 400 g multiply by 2.5 (or find 1.33 + 1.33 + 0.67 ≈ 3.33), for 2 kg halve. Then compare the five numbers.",
        traps: "Assuming the biggest pack (2 kg) is the best deal. Assuming the smallest dollar amount ($1.00) is cheapest. Comparing 1.33 with 1.75 without changing the quantity.",
        similar: "Unit price: always convert to price per 1 unit (per kg, per 100 g, per litre) before comparing."
      },
      {
        id: 8,
        topic: "Reading a population pyramid",
        stem: `<p>The graph below is a population pyramid, breaking the population of a certain country down into age groups and gender.</p>
          <p>How many more women than men are there who are aged between 20 and 29?</p>`,
        fig: F.populationPyramid(),
        options: ["150 000", "1 500 000", "1 650 000", "500 000", "250 000"],
        answer: 0,
        foundation: "A population pyramid has males on the left and females on the right, one row per age group. Read the bar length against the scale on the axis, and note the unit in the label: each unit here is 100 000 people.",
        steps: "Find the 20-29 row. Male bar ends just past 15, about 16. Female bar ends about 17.5. Difference = 17.5 − 16 = 1.5 units. 1.5 × 100 000 = 150 000.",
        fast: "Subtract the two numbers on the axis first (1.5), then multiply by the unit given in the axis label (100 000).",
        traps: "Ignoring the unit and reading 1.5 as a count of people. Treating the unit as 1 000 000 (giving 1 500 000). Reading the 30-39 or the 10-19 row. Adding the bars instead of subtracting.",
        similar: "Chart questions: pick the row, read both values, apply the unit, then do the operation the question asks (difference, total, ratio)."
      },
      {
        id: 9,
        topic: "Third vertex of a right triangle",
        stem: `<p>What is the final coordinate of a right-angled triangle with coordinates (2, 9) and (8, 3)?</p>`,
        options: ["(4, 6)", "(8, 7)", "(2, 3)", "(2, 7)", "(4, 9)"],
        answer: 2,
        foundation: "If the two legs run along the grid (one horizontal, one vertical), the right angle corner takes the x of one point and the y of the other. From (2, 9) and (8, 3), the two possible corners are (2, 3) and (8, 9).",
        steps: "Corner A: x from (2, 9) = 2, y from (8, 3) = 3, giving (2, 3). Corner B: (8, 9). Only (2, 3) is in the list. Check: (2, 3) to (2, 9) is vertical (length 6) and (2, 3) to (8, 3) is horizontal (length 6), meeting at 90 degrees.",
        fast: "Mix the coordinates: swap the y values. (2, 9) and (8, 3) give (2, 3) or (8, 9). Find it in the options.",
        traps: "(4, 6) is the midpoint of the longest side, so it lies on the line between the points and makes no triangle. (8, 7), (2, 7) and (4, 9) share only one coordinate with the given points.",
        similar: "Given two vertices of an axis-aligned right triangle: list the two mixed-coordinate points. Use the same idea for rectangles: the fourth vertex comes from the other two coordinates."
      },
      {
        id: 10,
        topic: "Symmetry in a triangle grid",
        stem: `<p>What is the fewest number of triangles that still need to be shaded so that the figure below has 3 axes of symmetry?</p>`,
        fig: tri([[1, 0], [3, 2], [4, 0], [4, 2]], [[3, 0]]),
        options: ["7", "8", "5", "10", "12"],
        answer: 0,
        foundation: "Three axes of symmetry means the shading must look the same after each of the three mirror lines (and after a one-third turn). Every shaded triangle needs its mirror copies shaded too. Triangles come in families: the 3 corners, the 3 middle-edge triangles of the same type, and families of 6.",
        steps: "Corners: top and bottom-left are shaded, bottom-right is not. Shade 1. The shaded down triangle in row 3 has two partners (row 3 right and row 4 middle), shade 2. The shaded up triangles at the end of row 3 and the third up triangle of row 4 belong to a family of 6 (both of row 2, both ends of row 3, and two in row 4). Four are missing, shade 4. Total extra = 1 + 2 + 4 = 7. Blue triangles in the diagram below show what to add.<div class=\"fig\">" + tri([[1, 0], [3, 2], [4, 0], [4, 2], [4, 3], [2, 0], [2, 1], [3, 0], [4, 1]], [[3, 0], [3, 1], [4, 1]], [[4, 3, "u"], [2, 0, "u"], [2, 1, "u"], [3, 0, "u"], [4, 1, "u"], [3, 1, "d"], [4, 1, "d"]]) + "</div>",
        fast: "Do not look for an answer by guessing. For each shaded triangle, find its two mirror images and shade them. Count the new ones only: 1 + 2 + 4.",
        traps: "Counting the total shaded after fixing (12). Answering 5, the number already shaded. Mirroring across only one axis, which fixes the left-right balance but not the other two.",
        similar: "Symmetry grids: group triangles into families by the mirror lines. Count how many in each family are already shaded and shade the rest."
      },
      {
        id: 11,
        topic: "Square pyramid of blocks",
        stem: `<p>How many blocks are needed to make Step 7?</p>`,
        fig: F.steps(),
        options: ["265", "455", "230", "420", "300"],
        answer: 1,
        foundation: "Each step adds a new bottom layer that is a bigger square. The layers are odd squares: 1 × 1, 3 × 3, 5 × 5, 7 × 7 and so on. Step n has layers up to (2n − 1) × (2n − 1).",
        steps: "Step 1 = 1. Step 2 = 1 + 9 = 10. Step 3 = 1 + 9 + 25 = 35. Step 7 has layers 1, 3, 5, 7, 9, 11, 13: 1 + 9 + 25 + 49 + 81 + 121 + 169 = 455.",
        fast: "Square the odd numbers 1 to 13 and add: 1, 9, 25, 49, 81, 121, 169. Running total: 1, 10, 35, 84, 165, 286, 455.",
        traps: "Using the step number squared (49). Adding 1 + 3 + 5 + ... (that sums to 49). Squaring only the last layer (169).",
        similar: "Growing 3D patterns: find the shape of each layer, list the layers for the step you are asked, and add them. Do not try to guess a pattern from only totals."
      },
      {
        id: 12,
        topic: "Time zones",
        stem: `<p>This table shows the time and date in different cities.</p>
          <table style="border-collapse:collapse;margin:8px 0;font-size:0.95rem">
            <tr><th style="border:1px solid #243044;padding:4px 14px;text-align:left">City</th><th style="border:1px solid #243044;padding:4px 14px;text-align:left">Time</th><th style="border:1px solid #243044;padding:4px 14px;text-align:left">Date</th></tr>
            <tr><td style="border:1px solid #243044;padding:4px 14px">Sydney</td><td style="border:1px solid #243044;padding:4px 14px">Midday</td><td style="border:1px solid #243044;padding:4px 14px">13/09/08</td></tr>
            <tr><td style="border:1px solid #243044;padding:4px 14px">London</td><td style="border:1px solid #243044;padding:4px 14px">2 am</td><td style="border:1px solid #243044;padding:4px 14px">13/09/08</td></tr>
            <tr><td style="border:1px solid #243044;padding:4px 14px">New York</td><td style="border:1px solid #243044;padding:4px 14px">10 pm</td><td style="border:1px solid #243044;padding:4px 14px">12/09/08</td></tr>
            <tr><td style="border:1px solid #243044;padding:4px 14px">Beijing</td><td style="border:1px solid #243044;padding:4px 14px">10 am</td><td style="border:1px solid #243044;padding:4px 14px">13/09/08</td></tr>
            <tr><td style="border:1px solid #243044;padding:4px 14px">Seoul</td><td style="border:1px solid #243044;padding:4px 14px">11 am</td><td style="border:1px solid #243044;padding:4px 14px">13/09/08</td></tr>
          </table>
          <p>If it is 6 pm on 14th of September in Sydney, what is the time and date in New York?</p>`,
        options: ["4 am, 14th of September", "4 am, 13th of September", "8 am, 14th of September", "8 am, 13th of September", "4 am, 12th of September"],
        answer: 0,
        foundation: "A time zone is a fixed gap between two cities. Use one row of the table to find that gap (compare the two cities you need), then apply it to the new time. Crossing midnight changes the date.",
        steps: "Sydney midday 13th and New York 10 pm on the 12th. From 10 pm to midday next day is 14 hours, so New York is 14 hours behind Sydney. 6 pm − 12 hours = 6 am on the 14th, and 2 more hours back is 4 am on the 14th. Midnight is not crossed, so the date stays the 14th.",
        fast: "Gap 14 hours. 6 pm minus 14 h: take off 12 to get 6 am the same day, then 2 more to get 4 am, still the same day.",
        traps: "Adding 14 hours instead of subtracting (New York is behind). Using the London gap. Dropping the date by a day when you did not cross midnight (4 am, 13th).",
        similar: "Find the gap from the table, decide ahead or behind, then add or subtract. Check the date only if you cross midnight."
      },
      {
        id: 13,
        topic: "Volume of a hollow",
        stem: `<p>Pilar used 28 cubic bricks to build the structure below. Each brick has a side length of 2 cm. He built the structure so that there was a base.</p>
          <p>How much concrete can he pour into the structure? (1 cm³ = 1 mL)</p>`,
        fig: F.hollowBlock(),
        options: ["32 mL", "64 mL", "16 mL", "24 mL", "48 mL"],
        answer: 0,
        foundation: "Concrete fills the empty space only. A full 4 × 4 × 2 block has 32 cubes. He used 28, so 4 cubes are missing. Each cube has volume 2 × 2 × 2 = 8 cm³ and 1 cm³ = 1 mL.",
        steps: "Full block = 4 × 4 × 2 = 32 bricks. Missing = 32 − 28 = 4 bricks (the 2 × 2 hollow in the top layer). Volume = 4 × 8 = 32 cm³ = 32 mL.",
        fast: "Missing bricks × 8. Do not work out the volume of the 28 bricks.",
        traps: "Using 28 × 8 = 224. Using 2 cm as the cube volume (4 × 2 = 8 mL). The base means concrete cannot leak out of the bottom, so only the top layer hollow counts.",
        similar: "Hollow volume: full size minus bricks used, times the volume of one brick. Check the unit conversion at the end."
      },
      {
        id: 14,
        topic: "Time zones",
        stem: `<p>The time in Los Angeles is 17 hours behind the time in Sydney. If a plane departs on Saturday at 8:12 am in Los Angeles and the trip is 15 hours long, what is the local time when the plane arrives in Sydney?</p>`,
        options: ["4:12 pm on Sunday", "4:12 am on Sunday", "4:12 pm on Saturday", "4:12 am on Monday", "4:12 pm on Monday"],
        answer: 0,
        foundation: "Add the flight time in the departure city's clock, then add the time gap to convert to the destination clock. Or convert the start to Sydney time first and add the flight. Both work, but use one clock at a time.",
        steps: "Los Angeles arrival time: 8:12 am + 15 h = 11:12 pm Saturday (LA time). Sydney is 17 hours ahead: 11:12 pm + 17 h = 4:12 pm Sunday. Check the other way: departure in Sydney time = 8:12 am + 17 h = 1:12 am Sunday. Add 15 h: 4:12 pm Sunday.",
        fast: "Total shift = 15 + 17 = 32 hours. 8:12 am Saturday + 24 h = 8:12 am Sunday, then + 8 h = 4:12 pm Sunday.",
        traps: "Subtracting 17 instead of adding (Sydney is ahead). Adding 15 only. Losing the date step when you cross midnight twice.",
        similar: "Flights across time zones: shift by flight time plus the time gap if the destination is ahead, minus if it is behind. Keep track of the date."
      },
      {
        id: 15,
        topic: "Number pyramid",
        stem: `<p>Going up the figure, each box is the difference of the two boxes below it.</p>
          <p>Find the value of x.</p>`,
        fig: F.numberPyramid(),
        options: ["31", "19", "18", "13", "26"],
        answer: 3,
        foundation: "A difference means the bigger number minus the smaller number, so every box is positive. Work one row at a time from the bottom row up.",
        steps: "Row 1 (bottom): 76, 45, 35, 47, 62, 12. Row 2: 31, 10, 12, 15, 50. Row 3: 21, 2, 3, 35. Row 4: 19, 1, 32. Row 5: 18, 31. Top: 31 − 18 = 13.",
        fast: "Write each new row under the last one and double check each difference with a quick sum back. Do not skip the middle rows.",
        traps: "Subtracting the smaller from the bigger the wrong way (negative numbers). Slipping on a subtraction such as 47 − 35 = 12. Losing track of a row so that it has the wrong number of boxes (each row has one fewer than the row below).",
        similar: "Number pyramids: finish row by row. Check one number in each row by adding the difference back to the smaller box to see you get the bigger."
      },
      {
        id: 16,
        topic: "Rule in corner numbers",
        stem: `<p>The numbers in the figures below follow a certain rule.</p>
          <p>Which number replaces the question mark?</p>`,
        fig: F.cornerSquares(),
        options: ["3", "6", "7", "8", "9"],
        answer: 0,
        foundation: "To find a rule, test the simplest operations on figure 1 and confirm on figure 2 before using figure 3. Here the middle number is the sum of two products: top row multiplied together plus bottom row multiplied together.",
        steps: "Figure 1: 2 × 5 + 7 × 3 = 10 + 21 = 31. Figure 2: 10 × 11 + 9 × 8 = 110 + 72 = 182. Figure 3: 6 × 4 + 13 × ? = 63, so 24 + 13 × ? = 63, 13 × ? = 39, ? = 3.",
        fast: "Test (top × top) + (bottom × bottom) on figure 1 first. It gives 31, so keep it. Then solve the last one: 63 − 24 = 39, and 39 ÷ 13 = 3.",
        traps: "Adding all four corners (17, not 31). Multiplying all four. Checking only one square, so a rule that happens to fit one square is accepted.",
        similar: "Pattern rule: try add, subtract and multiply on pairs of corners (rows, columns, diagonals) and test on every complete figure before you solve."
      },
      {
        id: 17,
        topic: "Folding a net",
        stem: `<p>If this net is folded into a cube, which view is correct?</p>`,
        fig: F.cubeNet(),
        options: [cube("star", "square", "square"), cube("dot", "circle", "star"), cube("dot", "square", "dot"), cube("star", "star", "square"), cube("star", "circle", "star")],
        answer: 2,
        foundation: "In a row of four faces, faces 1 and 3 are opposite, and faces 2 and 4 are opposite. Faces that are opposite can never appear together in one view. A cube view shows three faces that all meet at one corner, so they must be mutually adjacent.",
        steps: "Row: dot, star, circle, dot. Opposites: first dot and circle, star and last dot. The two squares (above and below the star) are opposite each other. Check each option: A has two squares touching, impossible. B needs a dot touching both a circle and a star, but the first dot is opposite the circle and the last dot is opposite the star, so neither works. D has two stars. E has two stars. C shows dot, square, dot: the two dots are neighbours (first and last in the row), and a square is neighbour to both. C works.",
        fast: "Use the opposite-pairs test. A star appears once and a circle appears once, so any view with two stars is wrong. Two squares can never touch. Only C survives.",
        traps: "Choosing a view that shows two squares or two stars. Forgetting that the first and last faces in a row of four are neighbours (they wrap round to touch), not opposite.",
        similar: "Nets: mark opposite pairs first (in a row of four, 1 with 3, 2 with 4). Then reject any view that shows an opposite pair together or repeats a symbol that appears once."
      },
      {
        id: 18,
        topic: "Probability of or",
        stem: `<p>Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random. What is the probability that the ticket drawn has a number that is a multiple of 3 or 5?</p>`,
        options: ["<sup>1</sup>&frasl;<sub>2</sub>", "<sup>9</sup>&frasl;<sub>20</sub>", "<sup>8</sup>&frasl;<sub>15</sub>", "<sup>2</sup>&frasl;<sub>5</sub>", "<sup>1</sup>&frasl;<sub>5</sub>"],
        answer: 1,
        foundation: "For 'A or B', list the favourable outcomes once each. Probability = favourable outcomes ÷ total outcomes. A number that is in both lists (a multiple of 15) must be counted once.",
        steps: "Multiples of 3: 3, 6, 9, 12, 15, 18 (6 numbers). Multiples of 5: 5, 10, 15, 20 (4 numbers). 15 is in both. Total distinct = 6 + 4 − 1 = 9. Probability = 9/20.",
        fast: "Write the numbers out: 3, 5, 6, 9, 10, 12, 15, 18, 20. Count 9. Over 20.",
        traps: "Adding 6 and 4 to get 10 (1/2) and counting 15 twice. Using the wrong total of 15. Counting only multiples of 3 (6/20).",
        similar: "Or questions: list, remove repeats, count. For 'and' questions count only numbers on both lists."
      },
      {
        id: 19,
        topic: "Balance scales",
        stem: `<p>What is the mass of the black oval?</p>`,
        fig: F.balance(),
        options: ["4 kg", "5 kg", "6 kg", "8 kg", "10 kg"],
        answer: 2,
        foundation: "A balanced scale means the total on the left equals the total on the right. Remove identical items from both sides to simplify, and count every item (here there are 3 boxes of 7 kg).",
        steps: "Left: three 7 kg boxes = 21 kg, two ovals, one 8 kg triangle. Right: two 16.5 kg boxes = 33 kg and one 8 kg triangle. Remove the 8 kg triangle from each side. 21 + 2 × oval = 33. 2 × oval = 12. One oval = 6 kg.",
        fast: "Cancel the two 8 kg triangles. Then 33 − 21 = 12 shared by 2 ovals gives 6.",
        traps: "Counting only two 7 kg boxes (14, giving 9.5 each). Forgetting there are two ovals and answering 12. Forgetting the triangles cancel.",
        similar: "Balance pictures: cancel matching items, count the rest, then divide the difference by the number of unknowns."
      },
      {
        id: 20,
        topic: "Joins and pieces",
        stem: `<p>A workman has to meld 17 pieces of copper together. If it takes 12 minutes to meld two pieces together, how long does it take to meld all the pieces?</p>`,
        options: ["198 minutes", "204 minutes", "196 minutes", "192 minutes", "169 minutes"],
        answer: 3,
        foundation: "Joining n pieces into one needs n − 1 joins. Two pieces need 1 join, three pieces need 2 joins. The time is the number of joins times the time for one join.",
        steps: "17 pieces need 16 joins. 16 × 12 = 192 minutes.",
        fast: "Think of a chain: 17 pieces have 16 gaps. 16 × 12 = 192.",
        traps: "Multiplying 17 × 12 = 204. Dividing 17 by 2 (8.5 joins). Counting one join per piece.",
        similar: "Fence posts, cutting a log into pieces, and joining chains all use pieces minus 1 (or posts minus 1 gaps)."
      },
      {
        id: 21,
        topic: "Percent change in perimeter",
        stem: `<p>A rectangular outer fence is going to be built around the existing fence. It will be 10% wider and longer than the diagram below.</p>
          <p>What would be the perimeter of the new fence? (The diagram is in metres. The original paper printed the answers in cm.)</p>`,
        fig: F.fence(),
        options: ["32.2 m", "35.2 m", "36.2 m", "40.2 m", "52.2 m"],
        answer: 1,
        foundation: "A 10% increase means multiply by 1.1. If both length and width grow by 10%, the whole perimeter also grows by 10%, because the perimeter is just 2 × (length + width).",
        steps: "New length = 12 × 1.1 = 13.2 m. New width = 4 × 1.1 = 4.4 m. Perimeter = 2 × (13.2 + 4.4) = 2 × 17.6 = 35.2 m. Check: old perimeter 32 m × 1.1 = 35.2 m.",
        fast: "Old perimeter = 2 × (12 + 4) = 32. Increase by 10%: 32 + 3.2 = 35.2.",
        traps: "Adding 10 m (not 10%). Increasing only the length. Giving the old perimeter plus 10% of one side. Mixing up area and perimeter.",
        similar: "Scaling by a percent: multiply every length by the same factor. Perimeter scales by that factor and area by the factor squared."
      }
    ]
  };
})();
