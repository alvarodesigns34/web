(function () {
  const dish = (d) =>
    `<li class="dish"><span><span>${d.name}</span>${d.gf ? '<span class="gf">GF</span>' : ""}${d.extra ? `<span class="extra">${d.extra}</span>` : ""}<span class="note">${d.note}</span></span>${d.price ? `<span class="price">${d.price}</span>` : ""}</li>`;
  const veg = [
    { name: "Aceitunas de la casa", note: "Marinated olives with lemons and herbs", gf: 1 },
    { name: "Pan de ajo y queso", note: "Garlic bread with cheese" },
    { name: "Halloumi fries", note: "Little gem, garlic croutons, sweet chilli, garlic dressing", extra: "£1 extra", gf: 1 },
    { name: "Pittas with dips", note: "Hummus, tzatziki and salsa" },
    { name: "Nachos", note: "Cheese, jalapeños, salsa and sour cream", gf: 1 },
    { name: "Judias y garbanzos", note: "Chickpeas and vegetables in a spicy tomato sauce", gf: 1 },
    { name: "Patatas bravas", note: "Potatoes with spicy tomato sauce and garlic dressing", gf: 1 },
    { name: "Patatas fritas", note: "Homemade chips", gf: 1 },
    { name: "Champiñones al ajillo", note: "Mushrooms sautéed in garlic butter and white wine", gf: 1 },
    { name: "Crispy onion rings", note: "Homemade, served with garlic mayonnaise" },
    { name: "Tortilla Española", note: "Spanish omelette — ask for today’s flavour", gf: 1 },
    { name: "Ratatouille con queso de cabra", note: "Ratatouille topped with baked goat’s cheese", gf: 1 },
    { name: "Pieles de patatas fritas", note: "Deep-fried potato skins with spicy mayonnaise" },
    { name: "Ensalada mixta", note: "Mixed salad in house dressing", gf: 1 },
    { name: "Ensalada Griega", note: "Tomato, cucumber, peppers, red onion, olives, feta, salsa verde", gf: 1 },
    { name: "Tacos de halloumi", note: "Soft tortillas, pink onions, lettuce, spicy mayonnaise", extra: "£1 extra" },
    { name: "Brie frito", note: "Deep-fried brie with red onion marmalade", extra: "£1 extra" },
  ];
  const sea = [
    { name: "Mejillones con tomate", note: "Fresh steamed mussels in a spicy tomato sauce", extra: "£1 extra", gf: 1 },
    { name: "Mejillones", note: "Fresh steamed mussels in white wine, garlic and cream", extra: "£1 extra" },
    { name: "Salmón cajun", note: "Cajun salmon, slow-cooked onions and balsamic dressing", gf: 1 },
    { name: "Calamares a la romana", note: "Squid in batter with garlic mayonnaise" },
    { name: "Gambas pil pil", note: "King prawns in garlic and chilli oil", extra: "£2 extra", gf: 1 },
    { name: "Gambas Argelinas", note: "King prawns in a spicy tomato sauce with rice", extra: "£2 extra" },
    { name: "Gambas gabardina", note: "King prawns in crispy batter with tomato salsa", extra: "£2 extra" },
    { name: "Sardinas a la plancha", note: "Pan-fried sardines", gf: 1 },
    { name: "Salmón con puerros", note: "Salmon in a creamy leek sauce", extra: "£1 extra", gf: 1 },
    { name: "Paella de mariscos", note: "Spanish rice with seafood and vegetables", extra: "£1 extra", gf: 1 },
    { name: "Pescado empanado", note: "White fish in breadcrumbs with garlic mayonnaise" },
    { name: "Tacos de pescado", note: "Soft tortillas, breaded fish, pink onions, lettuce, spicy mayo", extra: "£1 extra" },
    { name: "Lubina mediterránea", note: "Pan-fried seabass with sweet peppers, capers and olives", extra: "£2 extra" },
  ];
  const meat = [
    { name: "Chorizo vino tinto", note: "Spicy sausage pan-fried in red wine", extra: "£1 extra", gf: 1 },
    { name: "Morcilla y chorizo", note: "Black pudding, chorizo, pickled fennel and cider reduction", extra: "£1 extra" },
    { name: "Albóndigas", note: "Homemade meatballs in a spicy tomato sauce" },
    { name: "Pichanha con chimichurri", note: "Rump cap steak with chimichurri and crispy onions", extra: "£2 extra" },
    { name: "Merguez sausages", note: "Spicy lamb sausages in tomato sauce", extra: "£1 extra" },
    { name: "Paella de carne", note: "Rice with chicken, chorizo and peppers", extra: "£1 extra", gf: 1 },
    { name: "Cordero en salsa", note: "Slow-cooked minted lamb", extra: "£2 extra" },
    { name: "Chilli con carne", note: "Spicy beef chilli with tortilla chips", gf: 1 },
    { name: "Estofado de ternera y pimientos", note: "Slow-cooked beef in tomato sauce with peppers and rice", extra: "£1 extra" },
    { name: "Tabla de queso y carnes frías", note: "Cold meats, cheese, olives and bread", extra: "£3 extra" },
    { name: "Papas fritas cargadas", note: "Loaded fries — cheese, jalapeños, sour cream, crispy chorizo", gf: 1 },
    { name: "Chorizo croquettes", note: "Iberian chorizo with garlic mayonnaise", extra: "£1 extra" },
  ];
  const chicken = [
    { name: "Pollo al ajillo", note: "Chicken breast in garlic butter and wine", gf: 1 },
    { name: "Tortilla wrap pizza", note: "Spicy chicken with red onion, olives, rocket, salsa verde" },
    { name: "Pollo con champiñones", note: "Chicken breast with mushrooms in a creamy sauce", gf: 1 },
    { name: "Pollo con chorizo", note: "Chicken in tomato sauce with peppers and chorizo", gf: 1 },
    { name: "Tacos de pollo", note: "Soft tortillas, chicken, pink onions, lettuce, spicy mayonnaise", extra: "£1 extra" },
    { name: "Goujons de pollo", note: "Chicken goujons with garlic mayonnaise" },
    { name: "Alitas de pollo", note: "Marinated chicken wings with barbecue sauce", gf: 1 },
    { name: "Pinchos de pollo", note: "Spicy chicken skewers with mint yoghurt", gf: 1 },
    { name: "Chicken gyros", note: "Marinated chicken, cucumber, tomato, red onion, tzatziki, fries on flatbread", extra: "£1 extra" },
  ];
  const large = [
    "Pollo con champiñones — chicken with mushrooms in a creamy sauce",
    "Pollo con chorizo — chicken in tomato sauce with chorizo and peppers",
    "Salmón con puerros — salmon in a creamy leek sauce",
    "Salmón con tomate y albahaca — salmon in tomato and basil",
    "Salmón al ajillo — salmon fillet in garlic butter and white wine",
    "Solomillo — sirloin steak with mushrooms and onion rings",
    "Solomillo Mexicano — sirloin with a spicy tomato sauce",
    "Solomillo con pimienta — sirloin with peppercorn sauce",
  ];
  const vTapas = [
    { name: "Papas fritas", note: "Crispy skin-on fries", price: "£3.95", gf: 1 },
    { name: "Aceitunas de la casa", note: "Marinated olives with lemons and herbs", price: "£3.45", gf: 1 },
    { name: "Pan de tomate", note: "Grilled bread with tomato", price: "£3.65" },
    { name: "Penne arrabiata", note: "Tomato sauce, crushed chillies, garlic and olives", price: "£3.95" },
    { name: "Pittas with dips", note: "Pitta breads with hummus", price: "£4.65" },
    { name: "Nachos", note: "Jalapeños, salsa and pink onions", price: "£4.65", gf: 1 },
    { name: "Judias y garbanzos", note: "Chickpeas and vegetables in a spicy tomato sauce", price: "£4.55", gf: 1 },
    { name: "Patatas bravas", note: "Potatoes with spicy tomato sauce and vegan garlic mayonnaise", price: "£4.45", gf: 1 },
    { name: "Patatas fritas", note: "Homemade chips", price: "£3.95", gf: 1 },
    { name: "Champiñones al ajillo", note: "Mushrooms sautéed in garlic and white wine", price: "£4.65", gf: 1 },
    { name: "Crispy onion rings", note: "Homemade, with vegan garlic mayonnaise", price: "£3.95" },
    { name: "Ratatouille", note: "Vegetables baked in tomato sauce", price: "£4.85", gf: 1 },
    { name: "Pieles de patatas fritas", note: "Deep-fried potato skins with vegan garlic mayonnaise", price: "£4.45" },
    { name: "Ensalada mixta", note: "Mixed salad in salsa verde or vinaigrette", price: "£3.85", gf: 1 },
    { name: "Tacos de vegetal", note: "Soft tortillas, grilled peppers, mushrooms, courgette, pink onion", price: "£4.95" },
  ];

  const intro =
    '<p class="note" style="max-width:40rem;margin:0 0 2rem">Most tables eat from the Rapido: three tapas, or one large plate plus one tapa. Weekday lunch from £9.45 (12:00–13:45). Happy hour from £11.95 (17:00–18:30). Saturday lunch from £10.95 (12:00–16:00); Saturday happy hour from £13.45 (16:00–18:30).</p>';

  const views = {
    tapas:
      intro +
      "<h3 style=\"font-family:var(--display);font-style:italic;font-size:2rem;font-weight:500;margin:0 0 .4rem\">Vegetarian tapas</h3><p class=\"note\">On the Rapido set. Some plates carry a small extra.</p><ul style=\"list-style:none;padding:0;margin:1.2rem 0 0\">" +
      veg.map(dish).join("") +
      "</ul>",
    seafood:
      intro +
      "<h3 style=\"font-family:var(--display);font-style:italic;font-size:2rem;font-weight:500;margin:0 0 .4rem\">Seafood</h3><p class=\"note\">On the Rapido set. Some plates carry a small extra.</p><ul style=\"list-style:none;padding:0;margin:1.2rem 0 0\">" +
      sea.map(dish).join("") +
      "</ul>",
    meat:
      intro +
      "<h3 style=\"font-family:var(--display);font-style:italic;font-size:2rem;font-weight:500;margin:0 0 .4rem\">Meat</h3><p class=\"note\">On the Rapido set. Some plates carry a small extra.</p><ul style=\"list-style:none;padding:0;margin:1.2rem 0 0\">" +
      meat.map(dish).join("") +
      "</ul>",
    chicken:
      intro +
      "<h3 style=\"font-family:var(--display);font-style:italic;font-size:2rem;font-weight:500;margin:0 0 .4rem\">Chicken</h3><p class=\"note\">On the Rapido set. Some plates carry a small extra.</p><ul style=\"list-style:none;padding:0;margin:1.2rem 0 0\">" +
      chicken.map(dish).join("") +
      "</ul>",
    large:
      intro +
      "<h3 style=\"font-family:var(--display);font-style:italic;font-size:2rem;font-weight:500;margin:0 0 .4rem\">Large plates</h3><p class=\"note\">Served with potatoes and vegetables, or homemade chips and salad.</p><ul style=\"list-style:none;padding:0;margin:1.2rem 0 0\">" +
      large.map((p) => `<li class="dish">${p}</li>`).join("") +
      "</ul>",
    vegan:
      intro +
      "<h3 style=\"font-family:var(--display);font-style:italic;font-size:2rem;font-weight:500;margin:0 0 .4rem\">Vegan</h3><p class=\"note\">Deep-fried vegan dishes are cooked in designated fryers. Dishes marked GF can be prepared gluten-free on request — tell the team when you order.</p><ul style=\"list-style:none;padding:0;margin:1.2rem 0 0\">" +
      vTapas.map(dish).join("") +
      "</ul><div style=\"margin-top:2rem\"><p style=\"font-weight:500;display:flex;justify-content:space-between;gap:1rem\">Vegetarian fajita <span class=\"price\">£10.95</span></p><p class=\"note\">Peppers, onion, mushroom, carrot and courgette on a hot skillet, with tortillas, salsa and vegan garlic mayonnaise.</p><p style=\"font-weight:500;display:flex;justify-content:space-between;gap:1rem;margin-top:1.2rem\">Tomato pasta <span class=\"price\">£8.75</span></p><p class=\"note\">Penne in tomato sauce with peppers, onion, carrot, courgette, mushroom and aubergine.</p></div><ul style=\"list-style:none;padding:1.5rem 0 0;margin:1.5rem 0 0;border-top:1px solid var(--line)\"><li class=\"dish\"><span>Vegan vanilla ice cream<span class=\"note\">With fresh strawberries and chocolate sauce</span></span><span class=\"price\">£4.45</span></li><li class=\"dish\"><span>Chocolate salted caramelised biscuit cheesecake<span class=\"note\">With vegan vanilla ice cream</span></span><span class=\"price\">£4.85</span></li></ul>",
  };

  const tabs = [
    ["tapas", "Tapas"],
    ["seafood", "Seafood"],
    ["meat", "Meat"],
    ["chicken", "Chicken"],
    ["large", "Large plates"],
    ["vegan", "Vegan"],
  ];

  const tabBox = document.getElementById("tabs");
  const body = document.getElementById("panel-body");
  if (!tabBox || !body) return;

  tabBox.innerHTML = tabs
    .map(([id, label]) => `<button type="button" data-tab="${id}">${label}</button>`)
    .join("");

  function show(id) {
    const key = views[id] ? id : "tapas";
    body.innerHTML = views[key] + '<p style="margin-top:2.5rem"><a class="btn btn-solid" href="tel:+441429222223">Book a table</a></p>';
    tabBox.querySelectorAll("button").forEach((b) => b.classList.toggle("on", b.getAttribute("data-tab") === key));
    body.scrollTop = 0;
  }

  tabBox.addEventListener("click", (e) => {
    const b = e.target.closest("[data-tab]");
    if (b) show(b.getAttribute("data-tab"));
  });

  window.CDM = { open: show };
  show("tapas");
})();
