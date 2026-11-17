window.OC_PAPERS = window.OC_PAPERS || {};
window.OC_PAPERS.t2 = {
  id: "t2",
  stamp: "T2 Mathematical reasoning",
  title: "Sixteen questions from the second set of misses",
  blurb: "Counting outcomes, volume of a hole, third vertices, unit price, seating logic, and undoing a wrong method.",
  minutes: 20,
  topics: [
    "Counting two events together",
    "Volume of a hollow in cubes",
    "Third vertex of a right triangle",
    "Rectangle length from area",
    "A scale that does not zero",
    "Big turns reduced to 360",
    "Fuel left in a partial tank",
    "Best buy per kilogram",
    "Growing cube pyramids",
    "Four people around a table",
    "Balance of mixed masses",
    "Undo a wrong calculation"
  ],
  questions: [
    {
      id: 1,
      topic: "Counting two events together",
      stem: `<p>A coin is tossed and an eight-sided spinner (faces 1 to 8) is spun at the same time.</p>
        <p>How many different results are possible?</p>`,
      options: ["8", "10", "14", "16", "24"],
      answer: 3,
      foundation: "When two things happen together, multiply the number of outcomes of each. A coin has 2 results. An 8-sided spinner has 8. Order does not matter here because the objects are different, so you still multiply.",
      steps: "Coin: H or T (2). Spinner: 1, 2, 3, 4, 5, 6, 7, 8 (8). Total = 2 × 8 = 16. Examples: (H, 1), (H, 2), ... (T, 8).",
      fast: "Write 2 × 8. Do not add. Adding 2 + 8 = 10 is the usual trap.",
      traps: "Choosing 8 (ignoring the coin) or 10 (adding). A six-sided dice with a coin is 12, not 16. Read the number of faces.",
      similar: "Any 'together / at the same time' count: multiply. Coin and dice 2×6=12. Two coins 2×2=4. Three coins 8."
    },
    {
      id: 2,
      topic: "Volume of a hollow in cubes",
      stem: `<p>Mina used 21 cubic bricks to build a 4-by-3-by-2 block with a hole on the top layer. Each brick has side 2 cm. The missing bricks are the hollow she will fill with concrete.</p>
        <p>How much concrete can she pour into the hollow? (1 cm³ = 1 mL)</p>`,
      fig: `<svg viewBox="0 0 220 120" width="220" height="120" aria-label="4 by 3 by 2 brick stack with three missing cubes on top">
        <g stroke="#17324d" stroke-width="1.4" fill="#d7e4ee">
          <rect x="20" y="58" width="36" height="36"/><rect x="56" y="58" width="36" height="36"/>
          <rect x="92" y="58" width="36" height="36"/><rect x="128" y="58" width="36" height="36"/>
          <rect x="20" y="22" width="36" height="36"/><rect x="128" y="22" width="36" height="36"/>
        </g>
        <text x="110" y="112" text-anchor="middle" font-size="11" fill="#4d6a80">top layer has a 3-cube gap</text>
      </svg>`,
      options: ["8 mL", "16 mL", "24 mL", "32 mL", "48 mL"],
      answer: 2,
      foundation: "A full 4 × 3 × 2 stack has 24 cubes. She used 21, so 3 cubes are missing. Each cube has volume 2 × 2 × 2 = 8 cm³ = 8 mL. Concrete fills only the missing cubes.",
      steps: "Missing cubes = 24 − 21 = 3. Volume = 3 × 8 = 24 mL.",
      fast: "Do not find the volume of all 21 bricks. The question asks for the hole: missing count × 8 mL.",
      traps: "Using 21 × 8 = 168 (the bricks themselves). Using 2 cm as the volume. Forgetting 2³ = 8 and using 2 or 4.",
      similar: "Full size minus bricks used = hole. Hole × volume of one cube. Check the cube side is cubed, not squared."
    },
    {
      id: 3,
      topic: "Third vertex of a right triangle",
      stem: `<p>A right-angled triangle has two vertices at (1, 8) and (7, 2). The right angle is made by a horizontal side and a vertical side.</p>
        <p>Which of these can be the third vertex?</p>`,
      fig: `<svg viewBox="0 0 240 150" width="240" height="150" aria-label="Grid with points (1,8) and (7,2)">
        <g stroke="#b7d0e0" fill="none">
          <path d="M20 20h200v110H20z"/>
        </g>
        <g fill="#17324d" font-size="11">
          <circle cx="50" cy="30" r="4"/><text x="58" y="28">(1, 8)</text>
          <circle cx="170" cy="110" r="4"/><text x="178" y="108">(7, 2)</text>
        </g>
      </svg>`,
      options: ["(4, 5)", "(7, 7)", "(1, 2)", "(3, 2)", "(1, 5)"],
      answer: 2,
      foundation: "An axis-aligned right angle sits at a corner where one side is horizontal and one is vertical. From two given points, the two possible corners are (x of first, y of second) and (x of second, y of first).",
      steps: "The two axis-aligned corners are (1, 2) and (7, 8). Only (1, 2) is in the options. Check: (1,8) to (1,2) is vertical, (1,2) to (7,2) is horizontal, so the angle at (1,2) is 90°.",
      fast: "Write the two mix-and-match points (1, 2) and (7, 8). Pick the one in the options. (4, 5) is the midpoint, not a vertex you need.",
      traps: "Choosing the midpoint. Choosing a point that makes a slanted hypotenuse-right-angle that is not axis-aligned, which this question ruled out.",
      similar: "Given (a, b) and (c, d), the axis-aligned third vertices are (a, d) and (c, b). Plot them if the picture helps."
    },
    {
      id: 4,
      topic: "Rectangle length from area",
      stem: `<p>The length of a rectangle is three times its width. The area is 75 cm². What is the length?</p>`,
      options: ["5 cm", "10 cm", "12 cm", "15 cm", "25 cm"],
      answer: 3,
      foundation: "Area = length × width. If length = 3 × width, then 3w × w = 3w² = area. Find w, then multiply by 3 for the length.",
      steps: "3w² = 75, so w² = 25, w = 5 cm. Length = 3 × 5 = 15 cm. Check: 15 × 5 = 75.",
      fast: "The two sides are 3 parts and 1 part. Area is 3 square-parts = 75, so one square-part is 25, width 5, length 15.",
      traps: "Answering the width 5 cm. Dividing 75 by 3 to get 25 and stopping. Using 3 + w instead of 3w.",
      similar: "L = kW and area A means W = sqrt(A/k) and L = kW. Always check L × W equals the given area."
    },
    {
      id: 5,
      topic: "A scale that does not zero",
      stem: `<p>A scale always adds the same extra amount to the true mass. A 5 kg bag reads 8 kg. A 9 kg bag reads 12 kg.</p>
        <p>What does the scale read when there is nothing on it?</p>`,
      options: ["0 kg", "2 kg", "3 kg", "4 kg", "8 kg"],
      answer: 2,
      foundation: "Reading = true mass + extra. The extra is the empty reading. Check it is the same for both bags.",
      steps: "8 − 5 = 3 and 12 − 9 = 3. Empty scale reads 3 kg.",
      fast: "Both readings are 3 kg too high. Empty is 3 kg too high.",
      traps: "Adding the two readings. Choosing 0 kg because nothing is on it. Using 8 − 9.",
      similar: "Subtract true from reading twice. If the extras match, that extra is the empty reading."
    },
    {
      id: 6,
      topic: "Big turns reduced to 360",
      stem: `<p>Maya is facing North and turns 990° to her right. Leo is facing East and turns 630° to his left.</p>
        <p>Which turn must Maya make so that she faces the same way as Leo?</p>`,
      options: ["90° left", "90° right", "180° left", "45° right", "270° right"],
      answer: 0,
      foundation: "A full turn is 360°. Reduce a large turn with remainders: 990 = 2 × 360 + 270. Right from a facing is clockwise. Left is anticlockwise. Then compare the two final facings.",
      steps: "Maya: 990° = 270° right from North, which is West. Leo: 630° = 270° left from East, which is South (East left 90° = North, 180° = West, 270° = South). Maya faces West and needs to face South: that is 90° left.",
      fast: "Mod 360 first. Sketch N/E/S/W. Turn the two people. Then the smallest turn from Maya's facing to Leo's facing.",
      traps: "Using 990° and 630° without reducing. Mixing left and right. Turning Maya to face Leo as a person rather than to match Leo's direction. The question is about matching facing.",
      similar: "Always reduce to 0-359°. Move in 90° steps on a compass rose. Then name the small turn that matches the two arrows."
    },
    {
      id: 7,
      topic: "Fuel left in a partial tank",
      stem: `<p>A ship on a full tank can travel 1800 km. It is filled to one third of a tank and then travels 420 km.</p>
        <p>How much further can it travel before it needs fuel?</p>`,
      options: ["140 km", "180 km", "420 km", "600 km", "1380 km"],
      answer: 1,
      foundation: "Distance is proportional to the fraction of the tank. One third of a full-tank distance is the fuel she started with. Subtract what was already used.",
      steps: "One third of 1800 km = 600 km of range. 600 − 420 = 180 km left.",
      fast: "Third of 1800 is 600. Minus 420 is 180. Do not subtract 420 from 1800 (that would be a full tank).",
      traps: "1800 − 420 = 1380. 1800 / 3 = 600 and stopping there. 420 / 3.",
      similar: "Range_left = (fraction × full range) − distance already travelled. If that is negative, the numbers were misread."
    },
    {
      id: 8,
      topic: "Best buy per kilogram",
      stem: `<p>Which deal is the best buy (lowest price per kilogram)?</p>`,
      options: ["$4.80 per kg", "$2.20 per 500 g", "$1.50 per 400 g", "$7.60 per 2 kg", "$1.10 per 250 g"],
      answer: 2,
      foundation: "Convert every deal to the same unit, usually dollars per kilogram. 1000 g = 1 kg. Lower $ per kg is the better buy.",
      steps: "A: $4.80/kg. B: $2.20 / 0.5 kg = $4.40/kg. C: $1.50 / 0.4 kg = $3.75/kg. D: $7.60 / 2 = $3.80/kg. E: $1.10 / 0.25 = $4.40/kg. Smallest is C, $3.75/kg.",
      fast: "Per 100 g can also work: C is $1.50 per 400 g = $0.375 per 100 g, which beats D at $0.38 per 100 g. Comparing C and D is the close pair.",
      traps: "Picking the smallest sticker price ($1.10) without converting. Picking the biggest pack. Mixing 500 g with 1 kg as if they were equal.",
      similar: "Write a $ / kg column for every option. Only then choose the minimum."
    },
    {
      id: 9,
      topic: "Growing cube pyramids",
      stem: `<p>A stepped square pyramid uses layers that are odd squares: Step 1 is 1-by-1, Step 2 adds a 3-by-3, Step 3 adds a 5-by-5, and so on.</p>
        <p>How many cubes are needed for Step 5?</p>`,
      options: ["55", "91", "125", "165", "225"],
      answer: 3,
      foundation: "Step n = 1² + 3² + ... + (2n − 1)² = n(2n − 1)(2n + 1) / 3.",
      steps: "Step 5 = 1 + 9 + 25 + 49 + 81 = 165. Formula: 5 × 9 × 11 / 3 = 165.",
      fast: "Add the five odd squares. 1+9=10, +25=35, +49=84, +81=165.",
      traps: "5³ = 125 (solid cube). Sum of 1 to 5 squares = 55. 15² = 225.",
      similar: "Name the first three terms from the picture, then jump with the odd-square sum."
    },
    {
      id: 10,
      topic: "Four people around a table",
      stem: `<p>Ravi, Sam, Nina and Lila sit around a square table. Their jobs are doctor, chef, artist and driver.</p>
        <p>1. The chef sat on Sam's left.<br>2. The driver sat opposite Nina.<br>3. Lila sat on Ravi's right.<br>4. A boy sat on the doctor's left.</p>
        <p>Ravi and Sam are boys. Nina and Lila are girls. People face the centre, so left is clockwise. What is Nina's job?</p>`,
      fig: `<svg viewBox="0 0 160 160" width="140" height="140" aria-label="Square table with four seats">
        <circle cx="80" cy="80" r="36" fill="none" stroke="#17324d" stroke-width="2"/>
        <path d="M80 28v12M80 120v12M28 80h12M120 80h12" stroke="#17324d" stroke-width="2"/>
      </svg>`,
      options: ["Driver", "Chef", "Artist", "Doctor", "Waiter"],
      answer: 1,
      foundation: "Fix one person, then place 'on the right' (anticlockwise) and 'opposite' (two seats away). Cross out clashes. The leftover job is the answer. Waiter is not one of the four jobs, so it cannot be correct.",
      steps: "Put Ravi at seat 1. Lila on his right is seat 4. Remaining seats 2 and 3 are Sam and Nina. If Nina is opposite the driver and Lila is at 4, Nina cannot be at 2 (that would make Lila the driver and also the chef). So Nina is at 3, Ravi is the driver, Sam is at 2, and the chef on Sam's left is Nina. Nina is the chef. Check: doctor's left is a boy, so the doctor is Lila (left of Lila is Ravi).",
      fast: "Seat the named pair from clue 3 first. Then try the two spots for Nina. One of them double-books a job. The other leaves Nina as chef.",
      traps: "Treating left as anticlockwise. Choosing Waiter. Stopping when you know Ravi is the driver and answering Driver for Nina.",
      similar: "Draw four seats. Place one pair. Test the two remaining seats. The clue 'a boy on the doctor's left' kills the cases where a girl sits clockwise of the doctor."
    },
    {
      id: 11,
      topic: "Balance of mixed masses",
      stem: `<p>The two pans balance. Each black oval has the same mass. What is the mass of one oval?</p>`,
      fig: `<svg viewBox="0 0 460 110" width="460" height="110" aria-label="Balance with boxes, two ovals and triangles">
        <line x1="20" y1="70" x2="440" y2="70" stroke="#17324d" stroke-width="3"/>
        <polygon points="230,70 218,96 242,96" fill="#17324d"/>
        <g font-size="12" text-anchor="middle" fill="#17324d">
          <rect x="30" y="18" width="44" height="24" fill="#e8f1f6" stroke="#17324d"/><text x="52" y="35">6 kg</text>
          <rect x="30" y="42" width="44" height="24" fill="#e8f1f6" stroke="#17324d"/><text x="52" y="59">6 kg</text>
          <rect x="78" y="42" width="44" height="24" fill="#e8f1f6" stroke="#17324d"/><text x="100" y="59">4 kg</text>
          <ellipse cx="150" cy="54" rx="18" ry="14" fill="#17324d"/>
          <ellipse cx="190" cy="54" rx="18" ry="14" fill="#17324d"/>
          <polygon points="220,28 244,68 196,68" fill="#d7e4ee" stroke="#17324d"/><text x="220" y="58">9 kg</text>
          <rect x="300" y="18" width="54" height="24" fill="#e8f1f6" stroke="#17324d"/><text x="327" y="35">14 kg</text>
          <rect x="300" y="42" width="54" height="24" fill="#e8f1f6" stroke="#17324d"/><text x="327" y="59">14 kg</text>
          <polygon points="380,28 404,68 356,68" fill="#d7e4ee" stroke="#17324d"/><text x="380" y="58">9 kg</text>
        </g>
      </svg>`,
      options: ["4 kg", "5 kg", "6 kg", "8 kg", "10 kg"],
      answer: 2,
      foundation: "If the fulcrum is in the middle and the question is only about mass, add each side. Left total = right total. Subtract the known masses, then split what is left between the matching unknown objects.",
      steps: "Left: 6 + 6 + 4 + 2x + 9 = 25 + 2x. Right: 14 + 14 + 9 = 37. So 25 + 2x = 37, 2x = 12, x = 6 kg.",
      fast: "Cancel the matching 9 kg triangles first. Then 16 + 2x = 28, 2x = 12, x = 6.",
      traps: "Adding every number on the page. Forgetting there are two ovals. Using 14 − 6 once instead of the full sides.",
      similar: "Write Left = Right. Cancel identical shapes. Solve for one unknown. Check by substituting back."
    },
    {
      id: 12,
      topic: "Undo a wrong calculation",
      stem: `<p>Jaya started with a number, multiplied it by 4 and added 2. She got 50. She was supposed to divide the original number by 4, then subtract 2.</p>
        <p>What answer should she have got?</p>`,
      options: ["1", "2", "3", "10", "12"],
      answer: 0,
      foundation: "First undo the wrong method to recover the original number. Inverse of +2 is −2. Inverse of ×4 is ÷4. Then apply the method she was supposed to use.",
      steps: "Wrong: 4n + 2 = 50, so 4n = 48, n = 12. Correct: 12 ÷ 4 − 2 = 3 − 2 = 1.",
      fast: "Do not start from 50 with the correct method. 50 is the output of the wrong method. Recover n, then follow the correct instruction.",
      traps: "Doing 50 ÷ 4 − 2 = 10.5, or 50 ÷ 4 = 12.5. Using 12 as the answer (that is the original number, not the required result).",
      similar: "Always: undo to n, then do the intended operations. Write both formulas before touching the calculator."
    },
    {
      id: 13,
      topic: "Counting two events together",
      stem: `<p>Three ordinary coins are tossed at once. How many different results are possible?</p>`,
      options: ["3", "6", "8", "9", "12"],
      answer: 2,
      foundation: "Each coin has 2 results and the coins are tossed together, so 2 × 2 × 2 = 8.",
      steps: "HHH, HHT, HTH, THH, HTT, THT, TTH, TTT. That is 8.",
      fast: "2³ = 8. If the question said 'how many heads', that would be different. It asks for different results, meaning sequences of H and T.",
      traps: "Answering 3 (one per coin) or 6 (adding 2+2+2).",
      similar: "n coins: 2^n outcomes. A coin and a spinner: 2 times the spinner faces."
    },
    {
      id: 14,
      topic: "Rectangle length from area",
      stem: `<p>The length of a rectangle is three times its width. The perimeter is 48 cm. What is the length?</p>`,
      options: ["6 cm", "12 cm", "16 cm", "18 cm", "24 cm"],
      answer: 3,
      foundation: "Perimeter = 2(L + W). With L = 3W, 2(3W + W) = 8W = 48, so W = 6 and L = 18. This is not an area question even if T2 Q4 was.",
      steps: "8W = 48, W = 6 cm, L = 18 cm. Check: 2(18+6) = 48.",
      fast: "The four sides are 3, 1, 3, 1 parts = 8 parts = 48, so one part is 6 and length is 3 parts = 18.",
      traps: "Using area: 3W² = 48. Answering width 6. Halving 48 to get 24 as the length.",
      similar: "Read area vs perimeter first. Same 3:1 rectangle, different formula."
    },
    {
      id: 15,
      topic: "Volume of a hollow in cubes",
      stem: `<p>A 5-by-3-by-2 stack of 1 cm cubes would have 30 cubes if it were solid. 26 cubes were used, and the rest is a hole.</p>
        <p>How many cubes are missing?</p>`,
      options: ["2", "3", "4", "6", "26"],
      answer: 2,
      foundation: "Missing = full count − used. Full 5 × 3 × 2 = 30.",
      steps: "30 − 26 = 4 missing cubes.",
      fast: "This one asks for a count, not millilitres. Do not multiply by a cube volume.",
      traps: "Answering 26. Computing a volume of 4 × 1 = 4 mL when the question asked how many cubes.",
      similar: "Decide first: count or volume. Then full minus used."
    },
    {
      id: 16,
      topic: "Undo a wrong calculation",
      stem: `<p>Arun started with a number, multiplied by 3 and added 1. He got 28. He was supposed to divide the original number by 3, then subtract 1.</p>
        <p>What answer should he have got?</p>`,
      options: ["1", "2", "8", "9", "27"],
      answer: 1,
      foundation: "Same undo-then-redo as Q12. Inverse of ×3 then +1 is −1 then ÷3.",
      steps: "3n + 1 = 28, 3n = 27, n = 9. Intended: 9 ÷ 3 − 1 = 3 − 1 = 2.",
      fast: "n = (28 − 1) / 3 = 9. Then 9/3 − 1 = 2. Option E 27 is 28 − 1, not divided.",
      traps: "28 ÷ 3 − 1. Using 9 as the answer. Subtracting 1 from 28 and stopping.",
      similar: "Two-line working: recover n, then intended operations. Circle which number is the original and which is the final answer."
    }
  ]
};
