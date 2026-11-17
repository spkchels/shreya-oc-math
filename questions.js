window.OC_META = {
  title: "OC Mathematical Reasoning Practice T1",
  minutes: 25,
  count: 20
};

window.OC_QUESTIONS = [
  {
    id: 1,
    topic: "Distances on a line",
    stem: `<p>Four towns, Riverbend, Hilltop, Lakeside and Bayview, lie in order along a straight road. The distance from Riverbend to Hilltop is the same as that from Lakeside to Bayview, and is one third of the distance from Hilltop to Lakeside.</p>
      <p>If the distance from Riverbend to Bayview is 50 km, how far is it from Riverbend to Lakeside?</p>`,
    fig: `<svg viewBox="0 0 520 70" width="520" height="70" aria-label="Four towns on a straight line">
      <line x1="20" y1="36" x2="500" y2="36" stroke="#1b3654" stroke-width="3"/>
      <g fill="#1b3654" font-size="12" text-anchor="middle" font-family="Segoe UI, Helvetica Neue, Arial, sans-serif">
        <circle cx="40" cy="36" r="6"/><text x="40" y="62">Riverbend</text>
        <circle cx="150" cy="36" r="6"/><text x="150" y="62">Hilltop</text>
        <circle cx="370" cy="36" r="6"/><text x="370" y="62">Lakeside</text>
        <circle cx="480" cy="36" r="6"/><text x="480" y="62">Bayview</text>
      </g></svg>`,
    options: ["10 km", "20 km", "30 km", "40 km", "50 km"],
    answer: 3,
    foundation: "When towns sit in a line, the whole trip is the sum of the pieces. Same length means the same letter. 'One third' means the middle piece is 3 times a short piece.",
    steps: "Let the short equal pieces be x. Then Riverbend-Hilltop = x, Lakeside-Bayview = x, and Hilltop-Lakeside = 3x. The whole road is x + 3x + x = 5x = 50 km, so x = 10 km. Riverbend to Lakeside is the first two pieces: x + 3x = 4x = 40 km.",
    fast: "Sketch four dots. Mark the two short gaps 1 and the long gap 3. That is 5 parts in total. 50 / 5 = 10 km per part. You need 4 parts: 40 km. Skip writing equations if the sketch is clear.",
    traps: "A common slip is answering the short gap (10 km) or the whole road (50 km). Another is treating 'one third' as the long gap being one third of a short gap. Read which distance is one third of which.",
    similar: "Any 'places in a line' item: draw the dots, tag equal gaps with the same number of marks, add to the total, then pick only the gaps the question asks for."
  },
  {
    id: 2,
    topic: "Rates and 'below'",
    stem: `<p>The temperature at midday was 15°C, and then it fell at a steady rate of 5°C every 5 hours.</p>
      <p>At what time did the temperature first go below the freezing point (0°C)?</p>`,
    options: ["2:00 am", "3:00 am", "3:01 am", "4:00 am", "5:00 am"],
    answer: 2,
    foundation: "Freezing is 0°C. A steady fall of 5°C in 5 hours is 1°C per hour. 'Below' is not the same as 'equal to'. If it hits 0 exactly on the hour, the first time it is below 0 is one minute later.",
    steps: "Rate = 1°C per hour. From 15°C down to 0°C takes 15 hours. Midday plus 15 hours is 3:00 am, when the temperature is exactly 0°C. It first goes below 0°C just after that: 3:01 am.",
    fast: "Change per hour = 5/5 = 1. Hours to freeze = start / rate = 15. Add that to midday. Then ask: does the question say below or at? Below means the next minute.",
    traps: "Picking 3:00 am treats 'below freezing' as 'at freezing'. If you think it only drops every 5 hours in jumps, you get 5 am, which is wrong because the rate is described as steady.",
    similar: "Watch the words at / below / above. For a constant rate, divide the change you need by the change per hour. Then nudge by 1 minute if the question is strict about below or above."
  },
  {
    id: 3,
    topic: "Place value in a product",
    stem: `<p>37520 × 48 = 1800960</p>
      <p>Therefore 37.520 × 4.8 =</p>`,
    options: ["18.00960", "18.096", "180.096", "1800.96", "1800.096"],
    answer: 2,
    foundation: "Moving a decimal point left divides by 10, 100, 1000, ... Each move in a factor divides the product by the same amount. Count the total number of places both numbers moved.",
    steps: "37520 to 37.520 is a move of 3 places (divide by 1000). 48 to 4.8 is a move of 1 place (divide by 10). The product is divided by 1000 × 10 = 10000. 1800960 ÷ 10000 = 180.096.",
    fast: "Count decimal places in the new product: 37.520 has 3, 4.8 has 1, total 4. Put 4 digits after the first digits of 1800960, which is 180.0960, written 180.096.",
    traps: "Counting only one of the two moves gives 1800.96 or 18.096. Do not re-multiply 37.520 × 4.8 by hand. The given product is the shortcut.",
    similar: "Whenever you are given A × B = C and asked a decimal version, count how many times 10 was pulled out of A and B, then divide C by that power of 10."
  },
  {
    id: 4,
    topic: "Fractions remaining",
    stem: `<p>There were 3 cakes to share.</p>
      <p>Ava ate 2/3 of a cake. Ben ate 5/6 of a cake. Chen ate 1 1/4 cakes. Dana then ate half of the cake that was still left.</p>
      <p>How much cake did Dana eat?</p>`,
    options: ["1/8", "1/4", "3/8", "5/12", "7/24"],
    answer: 0,
    foundation: "Convert mixed numbers to improper fractions. Use a common denominator to add. Remaining = start − eaten. 'Half of the remaining' means multiply the leftover by 1/2. Do not add Dana into the first total.",
    steps: "Eaten first: 2/3 + 5/6 + 5/4. Common denominator 12: 8/12 + 10/12 + 15/12 = 33/12 = 11/4. Start with 12/4. Leftover = 12/4 − 11/4 = 1/4. Dana ate half of that: 1/8.",
    fast: "Work in twelfths of a cake if you like, or in quarters once the sum is 11/4. 3 cakes is 12/4, leftover 1/4, half is 1/8. Check: leftover must be less than 1 cake.",
    traps: "Stopping at the leftover (1/4) instead of taking half. Adding 1 1/4 as 1 + 1/4 incorrectly into a messy decimal. Forgetting that 3 is the start amount.",
    similar: "Add what was taken, subtract from the whole, then apply the last person's instruction (half, one third, the rest)."
  },
  {
    id: 5,
    topic: "Tiling and area",
    stem: `<p>Paving can be made with square tile S and rectangle tile R. Tile S is half the size of tile R.</p>
      <p>Which of these patterns is not possible?</p>`,
    fig: `<svg viewBox="0 0 280 70" width="280" height="70" aria-label="Tile S is a square, tile R is two squares">
      <rect x="10" y="18" width="28" height="28" fill="#f4f7fb" stroke="#1b3654" stroke-width="2"/>
      <text x="24" y="62" text-anchor="middle" font-size="12" font-family="Segoe UI, Helvetica Neue, Arial, sans-serif">S</text>
      <rect x="70" y="18" width="56" height="28" fill="#7a8b9a" stroke="#1b3654" stroke-width="2"/>
      <line x1="98" y1="18" x2="98" y2="46" stroke="#1b3654" stroke-dasharray="3 3"/>
      <text x="98" y="62" text-anchor="middle" font-size="12" font-family="Segoe UI, Helvetica Neue, Arial, sans-serif">R</text>
      </svg>
      <p class="cap">S covers 1 unit square. R covers 2 unit squares.</p>`,
    options: [
      "4-by-3 using 4 of R and 4 of S",
      "4-by-3 using 5 of R and 2 of S",
      "4-by-3 using 3 of R and 5 of S",
      "4-by-3 using 2 of R and 8 of S",
      "4-by-3 using 6 of R and 0 of S"
    ],
    answer: 2,
    foundation: "Area must match. A 4-by-3 rectangle has 12 unit squares. If R = 2 and S = 1, then 2×(number of R) + 1×(number of S) must equal 12. If the areas do not match, the tiling is impossible. If they do match, a 1-by-2 tile can fill a 4-by-3 board.",
    steps: "Target area = 12. A: 8 + 4 = 12. B: 10 + 2 = 12. C: 6 + 5 = 11, not 12. D: 4 + 8 = 12. E: 12 + 0 = 12. Only C fails the area test.",
    fast: "You do not need to draw every paving. Check the unit count first. The option whose units are not 12 cannot exist.",
    traps: "Spending time trying to draw C when the area already rules it out. Also mixing up 'half the size' (area) with half the side length.",
    similar: "For any 'which pattern is not possible' with two tile sizes, convert to units, compute grid area, and find the option that does not add up."
  },
  {
    id: 6,
    topic: "Growing 3D patterns",
    stem: `<p>A stepped square pyramid is built so that Step 1 is a 1-by-1 square of cubes, Step 2 adds a 3-by-3 layer under it, Step 3 adds a 5-by-5 layer, and so on.</p>
      <p>How many cubes are needed for Step 6?</p>`,
    fig: `<svg viewBox="0 0 360 90" width="360" height="90" aria-label="Steps 1 to 3 of the pyramid">
      <rect x="20" y="40" width="18" height="18" fill="#c5d4e0" stroke="#1b3654"/>
      <text x="29" y="78" text-anchor="middle" font-size="11">Step 1</text>
      <g transform="translate(90,0)">
        <rect x="8" y="46" width="54" height="18" fill="#9bb0c2" stroke="#1b3654"/>
        <rect x="26" y="28" width="18" height="18" fill="#c5d4e0" stroke="#1b3654"/>
        <text x="35" y="78" text-anchor="middle" font-size="11">Step 2</text>
      </g>
      <g transform="translate(200,0)">
        <rect x="0" y="52" width="90" height="16" fill="#7a93a8" stroke="#1b3654"/>
        <rect x="18" y="36" width="54" height="16" fill="#9bb0c2" stroke="#1b3654"/>
        <rect x="36" y="20" width="18" height="16" fill="#c5d4e0" stroke="#1b3654"/>
        <text x="45" y="84" text-anchor="middle" font-size="11">Step 3</text>
      </g>
      </svg>`,
    options: ["91", "140", "165", "286", "341"],
    answer: 3,
    foundation: "The layers are the odd square numbers: 1, 9, 25, 49, ... The nth odd number is 2n − 1, so the nth layer is (2n − 1)² cubes. Step n is the sum of the first n odd squares.",
    steps: "Step 6 = 1² + 3² + 5² + 7² + 9² + 11² = 1 + 9 + 25 + 49 + 81 + 121 = 286. Check: 1 + 9 = 10, +25 = 35, +49 = 84, +81 = 165, +121 = 286.",
    fast: "Formula for the first n odd squares: n(2n − 1)(2n + 1) / 3. For n = 6: 6 × 11 × 13 / 3 = 2 × 11 × 13 = 286. If you forget the formula, adding the six squares is still quick.",
    traps: "Using 6³ = 216, or the triangular number 21, or stopping at Step 5 (165). The picture is layers of odd squares, not a solid 6-cube.",
    similar: "Count cubes in Step 1, 2, 3 first. Name the sequence (odd squares, or n², or n³). Then jump to the asked step. Do not skip the first three counts."
  },
  {
    id: 7,
    topic: "Solve, then test statements",
    stem: `<p>If 5A − 15 = 2A and 8B − 3B = 20, which of the following statements is true?</p>`,
    options: [
      "A² − B² = 9",
      "A + B = B − A × 2",
      "B² − 3 = A",
      "2A = B",
      "A = B"
    ],
    answer: 0,
    foundation: "First solve each equation for the letter. Then test every option with those numbers. Follow order of operations: multiply before add or subtract. Difference of squares is a² − b² = (a − b)(a + b).",
    steps: "5A − 15 = 2A so 3A = 15, A = 5. 5B = 20, B = 4. A: 25 − 16 = 9, true. B: left 9, right 4 − 10 = −6, false. C: 16 − 3 = 13, not 5. D: 10 ≠ 4. E: 5 ≠ 4. Only A is true.",
    fast: "Get A and B in about 15 seconds, then plug in. You can stop at the first true option if you still scan the others for a trap. For A, 25 − 16 is faster than expanding.",
    traps: "Option B is written to trick order of operations. A × 2 happens first. Also 8B − 3B is 5B, not 11B.",
    similar: "Two short equations, then 'which statement is true'. Always find the two values first. Never try to rearrange the options without numbers."
  },
  {
    id: 8,
    topic: "Place value of a digit",
    stem: `<p>What is the total value of all the 5s in 50505.05?</p>`,
    options: ["505.05", "5005.05", "50505.05", "50500.05", "50505"],
    answer: 2,
    foundation: "The value of a digit is digit × its place. Places to the left of the point are ones, tens, hundreds, thousands, ... Places to the right are tenths, hundredths, thousandths. If a digit appears more than once, add every place value.",
    steps: "50505.05 has 5 in the ten-thousands (50000), the hundreds (500), the ones (5), and the hundredths (0.05). Total 50000 + 500 + 5 + 0.05 = 50505.05.",
    fast: "Cover the digits that are not 5 (the two zeros). What remains is already 50505.05. That is the sum of the 5s.",
    traps: "Reporting only the largest 5 (50000), or dropping the hundredths, or thinking 'the value of 5' means the digit 5 itself.",
    similar: "Write the number in a place-value table, circle the asked digit every time it appears, and add those place values."
  },
  {
    id: 9,
    topic: "Faulty scale (offset)",
    stem: `<p>A kitchen scale is faulty. It does not read 0 kg when nothing is on it. It always adds the same extra amount to the true mass.</p>
      <p>A 3 kg bag reads 5 kg. A 7 kg bag reads 9 kg. What does the scale read when there is nothing on it?</p>`,
    fig: `<svg viewBox="0 0 320 90" width="320" height="90" aria-label="Two readings on a faulty scale">
      <rect x="20" y="20" width="120" height="50" rx="8" fill="#fff" stroke="#1b3654"/>
      <text x="80" y="42" text-anchor="middle" font-size="12">true 3 kg</text>
      <text x="80" y="60" text-anchor="middle" font-size="12" font-weight="700">reads 5 kg</text>
      <rect x="180" y="20" width="120" height="50" rx="8" fill="#fff" stroke="#1b3654"/>
      <text x="240" y="42" text-anchor="middle" font-size="12">true 7 kg</text>
      <text x="240" y="60" text-anchor="middle" font-size="12" font-weight="700">reads 9 kg</text>
      </svg>`,
    options: ["0 kg", "1 kg", "2 kg", "3 kg", "4 kg"],
    answer: 2,
    foundation: "A constant error means reading = true mass + extra. The extra is the same for every object, including the empty scale. Check the extra with both given objects.",
    steps: "5 − 3 = 2 and 9 − 7 = 2. The extra is 2 kg. Empty scale: 0 + 2 = 2 kg.",
    fast: "The two readings are each 2 kg too high. Empty must also be 2 kg too high.",
    traps: "Adding the two readings (14) or the two masses (10). Choosing 0 kg because 'nothing is on it' ignores the fault the question stated.",
    similar: "Find extra = reading − true, confirm it is the same both times, then apply extra to the empty scale or to a new object."
  },
  {
    id: 10,
    topic: "Probability of A or B",
    stem: `<p>Tickets numbered 1 to 30 are mixed and one ticket is drawn at random. What is the probability that the number is a multiple of 4 or a multiple of 6?</p>`,
    options: ["7/30", "1/3", "2/5", "1/2", "11/30"],
    answer: 1,
    foundation: "P(event) = favourable / total. For 'or', count each number only once. Multiples of both 4 and 6 are multiples of 12. Those must not be counted twice.",
    steps: "Multiples of 4: 4, 8, 12, 16, 20, 24, 28 (7). Multiples of 6: 6, 12, 18, 24, 30 (5). Both: 12, 24 (2). Union = 7 + 5 − 2 = 10. Probability = 10/30 = 1/3.",
    fast: "List quickly, then strike the overlaps. 10 out of 30 simplifies by 10 to 1/3. Listing is safer than a formula in a 30-second window.",
    traps: "Adding 7/30 + 5/30 = 12/30 without removing the doubles. Also using 20 as the total, or writing 10/30 and not matching the simplified option 1/3.",
    similar: "Write the two lists, cross out repeats, then write fraction and simplify. This is the inclusion rule: n(A or B) = n(A) + n(B) − n(A and B)."
  },
  {
    id: 11,
    topic: "Compass path",
    stem: `<p>Priya rides east for 3 km, turns 90° left and rides 2 km, turns 90° right and rides 1 km, turns 90° left and rides 4 km, then turns 90° left and rides 3 km.</p>
      <p>How far has she ridden, and which way should she go to face her start point?</p>`,
    options: ["10 km, South", "13 km, SW", "13 km, SE", "9 km, West", "13 km, NW"],
    answer: 1,
    foundation: "Track two things: total distance (add the legs) and facing (left/right 90° from the current heading). After the path, the direction home is the direction of the start from where she now stands, which is opposite her net displacement.",
    steps: "Headings: E 3, left to N 2, right to E 1, left to N 4, left to W 3. Distance = 3+2+1+4+3 = 13 km. Net East: 3+1−3 = 1 km east. Net North: 2+4 = 6 km north. She is 1 km east and 6 km north of start, so start is south-west of her. She should go SW.",
    fast: "Keep a tiny compass sketch and a running tally E/W and N/S. Distance is the sum, always. Direction home is opposite the net vector. Here net is a little east and a lot north, so home is SW.",
    traps: "Reporting displacement 6.1 km instead of distance travelled 13 km. Mixing up left/right so the last leg goes east. SE would be if she had ended west of start.",
    similar: "Make a plus-sign compass. After each 90° turn, update heading first, then draw the next arrow. Sum lengths for 'how far travelled'. For 'towards start', reverse the net N/S and E/W."
  },
  {
    id: 12,
    topic: "Equal objects on a scale",
    stem: `<p>Five identical pears have a total mass of 2 kg. Four identical peaches have a total mass of 3 kg. What is the mass of 2 pears and 2 peaches together?</p>`,
    options: ["1.5 kg", "2 kg", "2.3 kg", "2.5 kg", "3 kg"],
    answer: 2,
    foundation: "If n identical things weigh W, one weighs W/n. Then scale up. You can also scale the groups: 2 pears are 2/5 of the pear group, 2 peaches are 2/4 = 1/2 of the peach group.",
    steps: "One pear = 2/5 kg. One peach = 3/4 kg. Two of each: 4/5 + 6/4 = 4/5 + 3/2. Common denominator 10: 8/10 + 15/10 = 23/10 = 2.3 kg.",
    fast: "2 pears = (2/5)×2 kg = 0.8 kg. 2 peaches = half of 3 kg = 1.5 kg. 0.8 + 1.5 = 2.3 kg. Halving the peach group is the speed trick.",
    traps: "Adding 2+3 and guessing 2.5. Or using 2 pears as 2 kg. Keep the units in kilograms and prefer fractions until the last line.",
    similar: "Find one item, or a matching fraction of the given group. Never add the two group totals unless the question asks for all of them."
  },
  {
    id: 13,
    topic: "Balanced products",
    stem: `<p>During a lunchtime challenge a student sees this on the board:</p>
      <p>12 × 480 = 36 × ■</p>
      <p>What is the value of ■?</p>`,
    options: ["80", "120", "144", "160", "240"],
    answer: 3,
    foundation: "If a × b = c × d, then d = a × b / c. Faster: move factors across. 12 to 36 is ×3, so 480 must be ÷3 to keep the product equal.",
    steps: "■ = 12 × 480 / 36. 12/36 = 1/3, so ■ = 480 / 3 = 160. Check: 12 × 480 = 5760 and 36 × 160 = 5760.",
    fast: "Left has a 12, right has a 36, which is 3 times 12. So the other factor must be 3 times smaller: 480 ÷ 3 = 160. No long multiply needed.",
    traps: "Doing 36 × 480 / 12, which swaps the 12 and 36. Or 480 − 36. Always ask which side grew, then shrink the other factor by the same ratio.",
    similar: "Rewrite as 'what times 36 equals 12 times 480' and cancel. Look for a simple ratio between 12 and 36, or 8 and 32, and so on."
  },
  {
    id: 14,
    topic: "Unknown then equal chance",
    stem: `<p>A jar has 8 green marbles, 15 red marbles, and some gold marbles. Then 5 gold marbles are added. After that, a marble is picked at random, and a red marble and a gold marble are equally likely.</p>
      <p>How many gold marbles were in the jar before the 5 were added?</p>`,
    options: ["5", "8", "10", "15", "20"],
    answer: 2,
    foundation: "Equal likelihood means equal counts after the change. Let the unknown be the count before the change, then add what was put in, then set the two counts equal.",
    steps: "Let g be gold at the start. After adding 5, gold = g + 5. Red stays 15. Equal chance: g + 5 = 15, so g = 10. Green does not affect this comparison.",
    fast: "Red is 15. Gold must also be 15 after the add. 15 − 5 = 10. Ignore green unless the question uses the total.",
    traps: "Setting gold equal to red before adding, which gives 15. Or including green so that 8 + g + 5 = 15. Equal likely names two colours, not the whole jar.",
    similar: "Translate 'equally likely' into 'same number of those two colours now'. Work after the change, then undo the change to answer 'before'."
  },
  {
    id: 15,
    topic: "Place value and rounding",
    stem: `<p>A 6-digit number is 2584? ?</p>
      <p>The tens digit is 2 less than the thousands digit. The ones digit is 1 more than the hundred-thousands digit.</p>
      <p>Mia rounds the number to the nearest thousand. Jai rounds the same number to the nearest ten. What is the difference between their answers?</p>`,
    options: ["3", "37", "400", "460", "500"],
    answer: 3,
    foundation: "Build the number from the place-value clues first. Nearest thousand: look at the hundreds digit (5 or more, go up). Nearest ten: look at the ones digit. Difference is the gap between those two rounded values.",
    steps: "Thousands digit is 8, so tens = 6. Hundred-thousands is 2, so ones = 3. The number is 258463. Nearest thousand: hundreds is 4, so 258000. Nearest ten: ones is 3, so 258460. Difference 258460 − 258000 = 460.",
    fast: "Once you have 258463, the last three digits 463 are below 500, so thousands stay 258000. Last digit 3 so tens stay 258460. 460 is the last-three-digits of the ten-rounding, minus 000.",
    traps: "Tens digit 2 less than 8 is 6, not 2. Rounding 258463 to 258500 (nearest hundred) by mistake. Difference of the two rounding 'places' (1000 − 10) is not the answer.",
    similar: "Fill the number completely, round twice as asked, subtract. Do not round to a place the question did not name."
  },
  {
    id: 16,
    topic: "Grid path with a block",
    stem: `<p>Jaya is on square X. Each square is 5 m by 5 m. She walks only North, South, East or West to a neighbouring square. Shaded squares are water and she cannot step on them, except square B, which is a bridge.</p>
      <p>Which directions describe a walk from X to the van at V?</p>`,
    fig: `<svg viewBox="0 0 270 270" width="250" height="250" aria-label="Grid with pond, bridge B, start X and van V">
      <g fill="none" stroke="#1b3654" stroke-width="1.5">
        <rect x="30" y="30" width="200" height="200"/>
      </g>
      <g font-family="Segoe UI, Helvetica Neue, Arial, sans-serif" font-size="12" text-anchor="middle">
        <g fill="#1b3654">
          <text x="50" y="24">1</text><text x="90" y="24">2</text><text x="130" y="24">3</text><text x="170" y="24">4</text><text x="210" y="24">5</text>
          <text x="16" y="54">1</text><text x="16" y="94">2</text><text x="16" y="134">3</text><text x="16" y="174">4</text><text x="16" y="214">5</text>
        </g>
      </g>
      <g stroke="#1b3654" stroke-width="1">
        <rect x="30" y="30" width="40" height="40" fill="#fff"/>
        <rect x="70" y="30" width="40" height="40" fill="#fff"/>
        <rect x="110" y="30" width="40" height="40" fill="#fff"/>
        <rect x="150" y="30" width="40" height="40" fill="#fff"/>
        <rect x="190" y="30" width="40" height="40" fill="#fff"/>
        <rect x="30" y="70" width="40" height="40" fill="#fff"/>
        <rect x="70" y="70" width="40" height="40" fill="#e8f6f4"/>
        <text x="90" y="96" text-anchor="middle" font-size="14" font-weight="700">X</text>
        <rect x="110" y="70" width="40" height="40" fill="#fff"/>
        <rect x="150" y="70" width="40" height="40" fill="#fff"/>
        <rect x="190" y="70" width="40" height="40" fill="#fff"/>
        <rect x="30" y="110" width="40" height="40" fill="#1b3654"/>
        <rect x="70" y="110" width="40" height="40" fill="#1b3654"/>
        <rect x="110" y="110" width="40" height="40" fill="#1b3654"/>
        <rect x="150" y="110" width="40" height="40" fill="#d7c37a"/>
        <text x="170" y="136" text-anchor="middle" font-size="14" font-weight="700">B</text>
        <rect x="190" y="110" width="40" height="40" fill="#fff"/>
        <rect x="30" y="150" width="40" height="40" fill="#fff"/>
        <rect x="70" y="150" width="40" height="40" fill="#fff"/>
        <rect x="110" y="150" width="40" height="40" fill="#fff"/>
        <rect x="150" y="150" width="40" height="40" fill="#fff"/>
        <rect x="190" y="150" width="40" height="40" fill="#fff"/>
        <rect x="30" y="190" width="40" height="40" fill="#fff"/>
        <rect x="70" y="190" width="40" height="40" fill="#fff"/>
        <rect x="110" y="190" width="40" height="40" fill="#fff"/>
        <rect x="150" y="190" width="40" height="40" fill="#fff"/>
        <rect x="190" y="190" width="40" height="40" fill="#e8f6f4"/>
        <text x="210" y="216" text-anchor="middle" font-size="14" font-weight="700">V</text>
      </g>
      <text x="250" y="248" font-size="11" fill="#5a6573">5 m</text>
      </svg>
      <p class="cap">Rows go down the page. North is towards the top. Water is the dark cells in row 3.</p>`,
    options: [
      "Walk 10 m East, then 15 m South, then 5 m East",
      "Walk 20 m East, then 15 m South",
      "Walk 5 m East, then 15 m South, then 10 m East",
      "Walk 15 m South, then 15 m East",
      "Walk 10 m South, then 15 m East, then 5 m South"
    ],
    answer: 0,
    foundation: "Each step to a neighbour is 5 m. Convert metres to squares by dividing by 5. Trace the path on the grid. Reject any path that enters water or that misses V.",
    steps: "X is column 2, row 2. V is column 5, row 5. Option A: 10 m east = 2 squares to column 4 row 2. 15 m south = 3 squares, through B (column 4 row 3), to column 4 row 5. 5 m east = 1 square to V. Water is avoided because the south run uses the bridge.",
    fast: "Kill bad options first. D goes south from X into water. B goes east along row 2 then south from column 6, which is off the 5-column grid. E's first 10 m south also hits water. That leaves A or C. C goes south from column 3, which is water. A is the only legal path.",
    traps: "Treating 10 m as 10 squares. Forgetting that B is allowed. Assuming any path with the right total distance (30 m) works.",
    similar: "Metres to squares, then finger-trace. Cross out paths that hit blocked squares. This is faster than computing a shortest path from scratch."
  },
  {
    id: 17,
    topic: "Tiling and area",
    stem: `<p>A 5-by-3 patio is paved with the same tiles as before: S covers 1 square and R covers 2 squares.</p>
      <p>Which mix cannot cover the patio exactly?</p>`,
    options: [
      "6 of R and 3 of S",
      "4 of R and 6 of S",
      "5 of R and 5 of S",
      "7 of R and 1 of S",
      "3 of R and 9 of S"
    ],
    answer: 1,
    foundation: "Patio area = 5 × 3 = 15 unit squares. With R = 2 and S = 1 you need 2R + S = 15.",
    steps: "A: 12 + 3 = 15. B: 8 + 6 = 14, not 15. C: 10 + 5 = 15. D: 14 + 1 = 15. E: 6 + 9 = 15. Only B fails.",
    fast: "Compute 2×R + S in your head for each option. The one that is not 15 is impossible. No drawing needed.",
    traps: "Choosing D because 7 rectangles 'look too many' even though 14 + 1 = 15. Area first, drawing later.",
    similar: "Same method as Q5. Grid area is the filter. Use it every time two tile sizes appear."
  },
  {
    id: 18,
    topic: "Place value in a product",
    stem: `<p>81260 × 25 = 2031500</p>
      <p>Therefore 81.260 × 2.5 =</p>`,
    options: ["20.315", "203.15", "2031.5", "20.31500", "20315"],
    answer: 1,
    foundation: "Same rule as Q3. Count how many places each factor moved, then divide the given product by 10 for each place.",
    steps: "81260 to 81.260 is 3 places (÷1000). 25 to 2.5 is 1 place (÷10). Divide 2031500 by 10000 to get 203.15.",
    fast: "3 + 1 = 4 decimal places to insert into 2031500, giving 203.1500, which is 203.15.",
    traps: "Moving 3 places only (2031.5) or treating 2.5 as two places because of the digit 5.",
    similar: "Drill: given a whole-number product, rewrite each factor with a point and divide. This is one of the fastest OC marks if you refuse to multiply from scratch."
  },
  {
    id: 19,
    topic: "Probability of A or B",
    stem: `<p>Cards numbered 1 to 15 are shuffled and one card is drawn. What is the probability that the number is a multiple of 3 or a multiple of 5?</p>`,
    options: ["1/3", "2/5", "7/15", "8/15", "1/2"],
    answer: 2,
    foundation: "Same 'or' rule as Q10. List, remove doubles (multiples of 15 here), then write the fraction in lowest terms if needed.",
    steps: "Multiples of 3: 3, 6, 9, 12, 15 (5). Multiples of 5: 5, 10, 15 (3). Both: 15 (1). Union = 5 + 3 − 1 = 7. Probability 7/15.",
    fast: "Seven favourable numbers out of 15. 7 and 15 share no common factor, so 7/15 stays as it is.",
    traps: "Counting 15 twice and getting 8/15. Using 3 + 5 = 8 without listing. Simplifying 7/15 incorrectly to 1/3.",
    similar: "Always list for totals up to about 30. The formula n(A)+n(B)−n(both) is just a tidy way to do the list."
  },
  {
    id: 20,
    topic: "Growing 2D patterns",
    stem: `<p>A square pattern grows by adding a larger square of unit tiles at each step. Step 1 uses a 1-by-1 square. Step 2 adds a 2-by-2 square. Step 3 adds a 3-by-3 square, and so on, keeping all previous squares.</p>
      <p>How many unit tiles are in Step 8?</p>`,
    options: ["64", "120", "168", "204", "256"],
    answer: 3,
    foundation: "Step n is 1² + 2² + ... + n². The sum of the first n squares is n(n + 1)(2n + 1) / 6.",
    steps: "Step 8 = 8 × 9 × 17 / 6. 8/2 = 4, 6/2 = 3, so 4 × 9 × 17 / 3. 9/3 = 3, so 4 × 3 × 17 = 12 × 17 = 204. Check the start: Step 1 = 1, Step 2 = 1+4 = 5, Step 3 = 5+9 = 14.",
    fast: "Use n(n+1)(2n+1)/6 with n = 8: 8 × 9 × 17 / 6 = 204. Adding 1+4+9+16+25+36+49+64 also works: the pairs 1+64, 4+49, 9+36, 16+25 are 65, 53, 45, 41, and those four numbers add to 204.",
    traps: "Answering 8² = 64 (only the new layer) or 8³ = 512 (not listed) or 16² = 256. The question keeps all previous squares.",
    similar: "Count Step 1 to Step 3, name the rule (sum of squares), then jump. Write the first three terms on the paper so you do not mix this with the odd-square pyramid in Q6."
  }
];

window.OC_PAPERS = window.OC_PAPERS || {};
window.OC_PAPERS.t1 = {
  id: "t1",
  stamp: "T1 Mathematical reasoning",
  title: "Twenty questions from the skills that slipped last time",
  blurb: "New numbers, same methods as the first set of misses.",
  minutes: 25,
  topics: [
    "Distances on a line",
    "Rates and the word below",
    "Decimals from a given product",
    "Fractions of a remaining amount",
    "Tiling by unit area",
    "Growing cube and square patterns",
    "Two short equations, then test options",
    "Place value of a repeating digit",
    "A scale that does not zero",
    "Probability of A or B",
    "Compass turns and grid blocks",
    "Equal objects, rounding a built number"
  ],
  questions: window.OC_QUESTIONS
};
