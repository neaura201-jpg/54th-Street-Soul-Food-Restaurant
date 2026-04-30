const menuItems = [
    {cat:"dinner",icon:"🍳",title:"Catfish Dinner",desc:"Fried catfish with your choice of two sides, and cornbread.",price:"$20.00"},
    {cat:"dinner",icon:"🥚",title:"Chicken Strip Dinner",desc:"Fried Chicken Strips with your choice of two sides and cornbread.",price:"$20.00"},
    {cat:"dinner",icon:"🫕",title:"Shrimp Dinner",desc:"Fried Shrimp with your choice of two sides and cornbread.",price:"$20.00"},
    {cat:"dinner",icon:"🥚",title:"Salmon Croquette Ballz Dinner",desc:"Fried Salmon with your choice of two sides and cornbread.",price:"$20.00"},
    {cat:"dinner",icon:"🥚",title:"Rib Dinner",desc:"Tender ribs with a tangy barbecue glaze on the side, served with 2 sides and cornbread.",price:"$25.00"},
     {cat:"Po' Boi",icon:"🍔",title:"Catfish Po' Boi",desc:"Fried catfish bites on hoagie bread drizzled in our signature Rosie's Sauce along with a side of coleslaw and fries.",price:"$16.99"},
    {cat:"Po' Boi",icon:"🍔",title:"Chicken Po' Boi",desc:"Fried chicken on hoagie bread drizzled in our signature Rosie's Sauce along with a side of coleslaw and fries.",price:"$14.49"},
    {cat:"Po' Boi",icon:"🍔",title:"Shrimp Po' Boi",desc:"Fried Shrimp on hoagie bread drizzled in our signature Rosie's Sauce along with a side of coleslaw and fries.",price:"$13.99"},
    {cat:"Baskets",icon:"🥞",title:"Catfish Basket",desc:"Fried catfish with a side of fries.",price:"$12.00"},
    {cat:"Baskets",icon:"🥞",title:"Chicken Strip Basket",desc:"Fried chicken Strips with a side of fries.",price:"$12.00"},
    {cat:"Baskets",icon:"🥞",title:"Shrimp Basket",desc:"Fried shrimp with a side of fries.",price:"$12.00"},
    {cat:"Baskets",icon:"🥞",title:"Salmon Croquette Ballz Basket",desc:"Salmon shaped into balls with green bell peppers and onions served with fries.",price:"$12.00"},
    {cat:"Baskets",icon:"🥞",title:"Wings Basket",desc:"Fried chicken wings with a side of fries.",price:"$12.00"},
    {cat:"Baskets",icon:"🥞",title:"Money Burger Basket",desc:"Beef Patty, Oh Boy Oberto Beef Hot Link, Onions, Lettuce, Cheese, Rosie's Sauce, on toasted buns.",price:"$15.00"},
   {cat:"Side Dishes",icon:"🥚",title:"Greens",desc:"Tender collard greens cooked with smoked meat seasoned to enhance their natural flavors.",price:"$5.00"},
    {cat:"Side Dishes",icon:"🥚",title:"Cheesy Mac",desc:"Creamy macaroni pasta coated in a rich cheese sauce.",price:"$5.00"},
    {cat:"Side Dishes",icon:"🥚",title:"Beans and Rice",desc:"Tender beans paired with fluffy white rice, creating a simple and hearty side dish.",price:"$5.00"},
    {cat:"Side Dishes",icon:"🥚",title:"Dirty Rice",desc:"Savory rice mixed with seasoned ground meat and aromatic spices.",price:"$5.00"},
    {cat:"drinks",icon:"☕",title:"Lemonade",desc:"Freshly squeezed lemon juice combined with water and sugar, offering a classic, zesty, and refreshing citrus beverage.",price:"$3.00"},
    {cat:"drinks",icon:"🧋",title:"Strawberry Lemonade",desc:"Freshly squeezed lemonade blended with pureed strawberries, offering a balance of sweet and tart flavors.",price:"$5.00"},
    {cat:"drinks",icon:"🧋",title:"Kool Aid",desc:"A nostalgic drink made by mixing a flavored powder with sugar and water, offering a variety of fruity flavors.",price:"$3.00"},
    {cat:"drinks",icon:"🧋",title:"Water",desc:"Pure and essential, this clear and refreshing water provides natural hydration, helping to quench your thirst and maintain well-being.",price:"$1.00"},
    {cat:"desserts",icon:"🍎",title:"Banana Pudding",desc:"Creamy pudding layered with slices of banana and vanilla wafers, topped with whipped cream.",price:"$5.00"},
    {cat:"desserts",icon:"🥤",title:"Strawberry Shortcake",desc:"Layers of fluffy cake with sweet strawberries in syrup and whipped cream.",price:"$5.00"},
    {cat:"desserts",icon:"🥤",title:"Cake Of The Day",desc:"A slice of our daily homemade cake, featuring a surprise flavor that varies each day.",price:"$5.00"},  
];

let activeFilter = 'all';
let showAll = false;

function filterMenu(cat, btn) {
  activeFilter = cat;
  showAll = false;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  renderMenu();
}

function renderMenu() {
  const grid = document.getElementById('menu-grid');
  const items = activeFilter === 'all' ? menuItems : menuItems.filter(i => i.cat === activeFilter);
  const show = showAll ? items : items.slice(0, 8);

  grid.innerHTML = show.map(item => `
    <div class="card">
      <div class="card-img placeholder" style="font-size:3.5rem;height:160px">${item.icon}</div>
      <div class="card-body">
        <div class="card-title">${item.title}</div>
        <p class="card-desc">${item.desc}</p>
        <div class="card-footer">
          <span class="card-price">${item.price}</span>
          <button class="card-order">Order</button>
        </div>
      </div>
    </div>
  `).join('');

  const container = document.getElementById('view-more-container');
  if (container) container.style.display = activeFilter === 'all' ? 'block' : 'none';

  const btn = document.getElementById('view-more-btn');
  if (btn) btn.textContent = showAll ? 'Show Less ↑' : 'View Full Menu';
}

function toggleShowAll() {
  showAll = !showAll;
  renderMenu();
}

renderMenu();

// ── PROMO CAROUSEL ──
let promoIndex = 0;
const promoTrack = document.getElementById('promoCarousel');
const promoSlides = promoTrack.querySelectorAll('.promo-block');
const dotsContainer = document.getElementById('promoDots');

promoSlides.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.className = 'promo-carousel-dot' + (i === 0 ? ' active' : '');
  dot.onclick = () => promoGoTo(i);
  dotsContainer.appendChild(dot);
});

function promoGoTo(n) {
  promoIndex = (n + promoSlides.length) % promoSlides.length;
  promoTrack.style.transform = `translateX(-${promoIndex * 100}%)`;
  document.querySelectorAll('.promo-carousel-dot')
    .forEach((d, i) => d.classList.toggle('active', i === promoIndex));
}

function promoSlide(dir) { promoGoTo(promoIndex + dir); }