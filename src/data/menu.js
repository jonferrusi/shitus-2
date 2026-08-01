export const CATEGORIES = [
  'Breakfast',
  'Benedicts & Breakfast Sandwiches',
  'Omelets',
  'Soup & Salads',
  'Wraps',
  'Burgers',
  'Sandwiches',
  'Entrees',
  'Sides',
  'Beverages',
  'Kids Menu',
  'Vegan Options',
  'Fish & Chips (Fridays)',
];

export const MENU_ITEMS = [
  // Breakfast — Served daily 8AM to 3PM
  { id: 'breakfast-special', category: 'Breakfast', name: 'Breakfast Special', price: '$12.99', description: '2 eggs any style with bacon, ham or sausage, home fries, toast & homemade strawberry jam.' },
  { id: 'peameal-eggs', category: 'Breakfast', name: 'Peameal & Eggs', price: '$14.49', description: '2 eggs any style with peameal, served with home fries & toast.' },
  { id: 'hungry-man', category: 'Breakfast', name: 'Hungry Man Breakfast', price: '$17.49', description: '3 eggs, 2 bacon, 2 sausage, 2 ham, 1 piece of french toast, home fries and toast.' },
  { id: 'carb-free', category: 'Breakfast', name: 'Carb Free Breakfast', price: '$11.99', description: '2 eggs any style with bacon, ham or sausage and sliced tomato. With peameal bacon $13.49.' },
  { id: 'steak-eggs', category: 'Breakfast', name: 'Steak and Eggs', price: '$18.99', description: '7oz striploin cut in house, 3 eggs any style, served with home fries and toast.' },
  { id: 'breakfast-wrap', category: 'Breakfast', name: 'Breakfast Wrap', price: '$14.49', description: '2 scrambled eggs with diced ham, onions, peppers and cheese, wrapped in a warm tortilla with home fries.' },
  { id: 'pancakes-3', category: 'Breakfast', name: '3 Large Pancakes', price: '$12.49', description: 'Add chocolate chips $2.50.' },
  { id: 'french-toast-3', category: 'Breakfast', name: '3 Piece French Toast', price: '$12.49', description: '' },
  { id: 'pancakes-or-french-toast', category: 'Breakfast', name: 'Pancakes or French Toast', price: '$15.49', description: 'With 3 pieces of bacon, 2 sausages or 2 ham, or 2 pieces of peameal bacon for $16.49.' },
  { id: 'waffles', category: 'Breakfast', name: 'Homemade Waffles', price: '$14.99', description: 'Served with fresh fruit and topped with whipped cream. Add chocolate chips $2.50.' },
  { id: 'family-platter', category: 'Breakfast', name: 'Family Platter', price: '$60.00', description: '10 scrambled eggs, 8 bacon, 8 ham, 8 sausages, 2 french toast, 2 pancakes, home fries and 4 orders of toast.' },
  { id: 'two-eggs-toast', category: 'Breakfast', name: '2 Eggs with Toast', price: '$6.99', description: '' },
  { id: 'two-eggs-homefries-toast', category: 'Breakfast', name: '2 Eggs with Home Fries and Toast', price: '$7.99', description: '' },
  { id: 'two-eggs-tomato-toast', category: 'Breakfast', name: '2 Eggs with Tomato Slices and Toast', price: '$9.49', description: '' },

  // Benedicts (all served with home fries)
  { id: 'benedict-traditional', category: 'Benedicts & Breakfast Sandwiches', name: 'Traditional Benedict', price: '$15.99', description: '2 poached eggs and fresh sliced peameal smothered with hollandaise sauce.' },
  { id: 'benedict-florentine', category: 'Benedicts & Breakfast Sandwiches', name: 'Florentine Benedict', price: '$14.99', description: '2 poached eggs and fresh spinach smothered with hollandaise sauce.' },
  { id: 'benedict-pacific', category: 'Benedicts & Breakfast Sandwiches', name: 'Pacific Benedict', price: '$17.99', description: '2 poached eggs and smoked salmon smothered with hollandaise sauce.' },
  // Breakfast Sandwiches — add cheese or egg for $2.00
  { id: 'sandwich-peameal-egg-cheese', category: 'Benedicts & Breakfast Sandwiches', name: 'Peameal, Egg & Cheese', price: '$13.49', description: 'On a toasted English muffin, served with home fries.' },
  { id: 'sandwich-toasted-western-am', category: 'Benedicts & Breakfast Sandwiches', name: 'Toasted Western', price: '$11.49', description: '2 eggs, ham and onions. Add home fries for $2.00.' },
  { id: 'sandwich-toasted-blt', category: 'Benedicts & Breakfast Sandwiches', name: 'Toasted BLT', price: '$11.49', description: 'Bacon, lettuce, tomato and mayo. Add home fries for $2.00.' },
  { id: 'fried-egg', category: 'Benedicts & Breakfast Sandwiches', name: 'Fried Egg (2 Eggs)', price: '$8.99', description: 'With bacon $11.49. Add home fries for $2.00.' },
  { id: 'sandwich-toasted-plt', category: 'Benedicts & Breakfast Sandwiches', name: 'Toasted PLT', price: '$12.49', description: 'Peameal, lettuce, tomato and mayo. Add home fries for $2.00.' },

  // Omelets — served with home fries, toast & homemade jam. Egg whites +$2/egg
  { id: 'omelet-western', category: 'Omelets', name: 'Western Omelet', price: '$13.99', description: 'Ham and onion.' },
  { id: 'omelet-ham-cheese', category: 'Omelets', name: 'Ham & Cheese Omelet', price: '$13.99', description: 'Ham and cheddar.' },
  { id: 'omelet-denver', category: 'Omelets', name: 'Denver Omelet', price: '$14.99', description: 'Sautéed mushrooms, onions, peppers, ham, tomatoes and cheese.' },
  { id: 'omelet-spanish', category: 'Omelets', name: 'Spanish Omelet', price: '$14.99', description: 'Sautéed mushrooms, onions, peppers, ham, salsa and cheese.' },
  { id: 'omelet-greek', category: 'Omelets', name: 'Greek Omelet', price: '$14.99', description: 'Red onions, feta cheese, tomatoes and black olives.' },
  { id: 'omelet-tuscan', category: 'Omelets', name: 'Tuscan Omelet', price: '$14.99', description: 'Fresh basil, sun-dried tomatoes and asiago cheese.' },
  { id: 'omelet-veggie', category: 'Omelets', name: 'Veggie Omelet', price: '$14.99', description: 'Onions, spinach, tomatoes, peppers and mushrooms.' },
  { id: 'omelet-mushroom', category: 'Omelets', name: 'Mushroom Omelet', price: '$13.99', description: 'Sautéed fresh mushrooms.' },
  { id: 'omelet-cheese', category: 'Omelets', name: 'Cheese Omelet', price: '$12.49', description: 'Cheddar cheese.' },
  { id: 'omelet-meat-lovers', category: 'Omelets', name: 'Meat Lovers Omelet', price: '$15.49', description: 'Bacon, sausage, ham and cheddar.' },

  // Soup & Salads — served 11AM to 3PM. Add chicken to any salad for $6.99
  { id: 'soup-of-day', category: 'Soup & Salads', name: 'Soup of the Day', price: '$4.49 – $5.49', description: 'Available in a bowl or cup. Made fresh every day — ask for today’s selection.' },
  { id: 'salad-garden', category: 'Soup & Salads', name: 'Garden Salad', price: '$10.49 – $11.99', description: 'Romaine with tomato, cucumber, red onions and choice of dressing.' },
  { id: 'salad-caesar', category: 'Soup & Salads', name: 'Caesar Salad', price: '$11.49 – $14.49', description: 'Romaine, homemade croutons, real bacon bits and parmesan cheese.' },
  { id: 'salad-greek', category: 'Soup & Salads', name: 'Greek Salad', price: '$11.49 – $14.49', description: 'Romaine, peppers, red onions, cucumber, tomatoes, olives and feta cheese.' },
  { id: 'salad-club', category: 'Soup & Salads', name: 'Club Salad', price: '$18.49', description: 'Our garden salad with chicken, bacon, cheddar cheese and choice of dressing.' },
  { id: 'salad-strawberry-almond', category: 'Soup & Salads', name: 'Strawberry and Almond', price: '$18.49', description: 'Spinach, strawberries, red onion and toasted almonds with poppy seed dressing. Seasonal. Add feta $3.00.' },

  // Wraps — served with fries, soup or salad
  { id: 'wrap-mediterranean', category: 'Wraps', name: 'Mediterranean Wrap', price: '$17.49', description: 'Grilled veggies, hummus, pesto, feta cheese with our homemade dressing.' },
  { id: 'wrap-smoked-salmon', category: 'Wraps', name: 'Smoked Salmon Wrap', price: '$18.99', description: 'Smoked salmon, cream cheese, lettuce, tomato, cucumber with our homemade dressing.' },
  { id: 'wrap-chicken-caesar', category: 'Wraps', name: 'Chicken Caesar Wrap', price: '$17.49', description: 'Chicken with Caesar salad.' },
  { id: 'wrap-blt', category: 'Wraps', name: 'B.L.T. Wrap', price: '$16.49', description: 'Bacon, lettuce, tomato and mayo.' },

  // Burgers — 7oz, fresh daily, served with lettuce/tomato/red onion + fries, soup or garden salad
  { id: 'burger-hamburger', category: 'Burgers', name: 'Hamburger', price: '$15.99', description: '' },
  { id: 'burger-swiss-mushroom', category: 'Burgers', name: 'Swiss & Mushroom Burger', price: '$18.49', description: 'Sautéed fresh mushrooms with Swiss cheese.' },
  { id: 'burger-banquet', category: 'Burgers', name: 'Banquet Burger', price: '$18.49', description: 'Bacon and cheddar.' },
  { id: 'burger-luigis', category: 'Burgers', name: 'Luigi’s Favourite', price: '$19.49', description: 'Piled high with sautéed mushrooms, fried onions, bacon and cheddar cheese.' },
  { id: 'burger-cheeseburger', category: 'Burgers', name: 'Cheeseburger', price: '$16.99', description: '' },

  // Sandwiches — served with fries, soup or salad
  { id: 'sandwich-reuben', category: 'Sandwiches', name: 'Reuben', price: '$17.49', description: 'Shaved corned beef with sauerkraut and Swiss cheese grilled on rye.' },
  { id: 'sandwich-corn-beef-rye', category: 'Sandwiches', name: 'Corned Beef on Rye', price: '$16.49', description: 'Shaved corned beef and mustard.' },
  { id: 'sandwich-toasted-western-lunch', category: 'Sandwiches', name: 'Toasted Western', price: '$13.99', description: 'Ham and onion.' },
  { id: 'sandwich-club-house', category: 'Sandwiches', name: 'Toasted Club House', price: '$17.49', description: 'Chicken, bacon, lettuce, tomato and mayo.' },
  { id: 'sandwich-monte-cristo', category: 'Sandwiches', name: 'Monte Cristo', price: '$14.99', description: 'Ham and Swiss cheese on Italian-style bread, dipped in egg mixture and grilled.' },
  { id: 'sandwich-blt', category: 'Sandwiches', name: 'B.L.T.', price: '$14.99', description: 'Bacon, lettuce, tomato and mayo.' },
  { id: 'sandwich-plt', category: 'Sandwiches', name: 'P.L.T.', price: '$15.49', description: 'Peameal, lettuce, tomato and mayo.' },
  { id: 'sandwich-grilled-cheese', category: 'Sandwiches', name: 'Grilled Cheese', price: '$11.49', description: 'With tomato $12.49. With bacon $14.49. With tomato and bacon $15.49.' },

  // Entrees
  { id: 'entree-beef-melt', category: 'Entrees', name: 'Beef Melt', price: '$17.49', description: 'Shaved roast beef on a garlic-buttered panini bun, sautéed mushrooms, cheddar and beef gravy. Served with fries.' },
  { id: 'entree-liver-onions', category: 'Entrees', name: 'Liver & Onions', price: '$18.49', description: 'Fresh beef liver with fried onions, topped with gravy. Served with fries.' },
  { id: 'entree-meatloaf', category: 'Entrees', name: 'Hot Meatloaf', price: '$17.49', description: 'Homemade bacon-wrapped meatloaf, open face, smothered with gravy and fries.' },
  { id: 'entree-hot-hamburger', category: 'Entrees', name: 'Hot Hamburger', price: '$17.49', description: 'Our homemade burger, open face, smothered with gravy and fries.' },
  { id: 'entree-perogies', category: 'Entrees', name: 'Perogies', price: '$17.49', description: 'Homemade potato, cheese and onion perogies topped with sautéed peppers, bacon, onions and cheese. Side of sour cream.' },
  { id: 'entree-chicken-fingers', category: 'Entrees', name: 'Chicken Fingers', price: '$16.99', description: 'Served with fries and a side of plum sauce.' },
  { id: 'entree-quesadillas', category: 'Entrees', name: 'Quesadillas', price: '$16.49', description: 'Sautéed peppers, onions, tomatoes, cheddar and mozzarella. Side of sour cream. Add chicken $4.49.' },

  // Sides
  { id: 'side-hash-browns', category: 'Sides', name: 'Hash Browns (2)', price: '$4.00', description: '' },
  { id: 'side-home-fries', category: 'Sides', name: 'Home Fries', price: '$4.00', description: '' },
  { id: 'side-bacon-ham-sausage', category: 'Sides', name: 'Bacon, Ham or Sausage', price: '$6.50', description: '' },
  { id: 'side-bagel', category: 'Sides', name: 'Toasted Bagel', price: '$3.99', description: 'With cream cheese $4.99.' },
  { id: 'side-gf-toast', category: 'Sides', name: 'Gluten Free Toast w/ Homemade Jam', price: '$3.99', description: '' },
  { id: 'side-tomatoes', category: 'Sides', name: 'Side of Tomatoes', price: '$4.50', description: '' },
  { id: 'side-peameal', category: 'Sides', name: 'Peameal', price: '$7.50', description: '' },
  { id: 'side-fruit', category: 'Sides', name: 'Side Fruit', price: '$5.49', description: 'Seasonal.' },
  { id: 'side-oatmeal', category: 'Sides', name: 'Oatmeal Porridge', price: '$5.50', description: 'Add toasted almonds $1.50.' },
  { id: 'side-toast-jam', category: 'Sides', name: 'Toast w/ Homemade Jam', price: '$2.50', description: '' },
  { id: 'side-hollandaise', category: 'Sides', name: 'Side Hollandaise Sauce', price: '$3.50', description: '' },
  { id: 'side-fries', category: 'Sides', name: 'French Fries', price: '$4.99 – $6.99', description: '' },
  { id: 'side-poutine', category: 'Sides', name: 'Poutine', price: '$6.99 – $8.99', description: '' },
  { id: 'side-sweet-potato-fries', category: 'Sides', name: 'Sweet Potato Fries', price: '$7.49', description: 'Served with a side of cajun mayo.' },
  { id: 'side-onion-rings', category: 'Sides', name: 'Onion Rings', price: '$7.49', description: 'Served with a side of Forty Creek BBQ sauce.' },
  { id: 'side-sauteed-mushrooms', category: 'Sides', name: 'Sautéed Mushrooms', price: '$4.00', description: '' },
  { id: 'side-sauteed-onions', category: 'Sides', name: 'Sautéed Onions', price: '$1.50', description: '' },
  { id: 'side-gravy', category: 'Sides', name: 'Gravy', price: '$2.00', description: '' },

  // Beverages
  { id: 'bev-coffee-tea', category: 'Beverages', name: 'Coffee or Tea', price: '$2.95', description: '' },
  { id: 'bev-milk', category: 'Beverages', name: 'Milk or Chocolate Milk', price: '$2.75', description: '' },
  { id: 'bev-soft-drinks', category: 'Beverages', name: 'Soft Drinks', price: '$2.00', description: '' },
  { id: 'bev-juice', category: 'Beverages', name: 'Juice', price: '$2.75', description: 'Orange, apple or grapefruit.' },
  { id: 'bev-hot-chocolate', category: 'Beverages', name: 'Hot Chocolate', price: '$2.75', description: 'With whipped cream.' },
  { id: 'bev-iced-tea', category: 'Beverages', name: 'Iced Tea', price: '$2.50', description: '' },
  { id: 'bev-perrier', category: 'Beverages', name: 'Perrier', price: '$3.49', description: '' },
  { id: 'bev-imported-beer', category: 'Beverages', name: 'Imported Beer', price: '$6.50', description: '' },
  { id: 'bev-beer', category: 'Beverages', name: 'Beer', price: '$5.50', description: '' },
  { id: 'bev-spirits', category: 'Beverages', name: 'Spirits', price: '$4.99', description: '' },
  { id: 'bev-wine', category: 'Beverages', name: 'Wine', price: '$7.85', description: '' },

  // Kids Menu — ages 10 and under
  { id: 'kids-eggs-bacon', category: 'Kids Menu', name: 'Breakfast — Eggs and Bacon', price: '$8.99', description: 'One egg, 1 piece bacon, ham or sausage, home fries and toast.' },
  { id: 'kids-pancakes', category: 'Kids Menu', name: 'Breakfast — Pancakes', price: '$8.99', description: 'Silver dollar pancakes with 1 piece bacon, ham or sausage.' },
  { id: 'kids-waffles', category: 'Kids Menu', name: 'Breakfast — Waffles', price: '$8.99', description: 'With fresh fruit & whipped cream.' },
  { id: 'kids-grilled-cheese', category: 'Kids Menu', name: 'Grilled Cheese & Fries', price: '$10.99', description: 'Includes one small drink and ice cream.' },
  { id: 'kids-chicken-fingers', category: 'Kids Menu', name: 'Chicken Fingers & Fries', price: '$10.99', description: 'Includes one small drink and ice cream.' },
  { id: 'kids-cheeseburger', category: 'Kids Menu', name: 'Cheeseburger & Fries', price: '$10.99', description: 'Includes one small drink and ice cream.' },

  // Vegan Options
  { id: 'vegan-avocado-toast', category: 'Vegan Options', name: 'Avocado Toast', price: '$12.49', description: '2 slices of rye toast topped with avocado, tomato and red onion. Add vegan feta $2.99.' },
  { id: 'vegan-breakfast-hash', category: 'Vegan Options', name: 'Breakfast Hash', price: '$14.49', description: 'Hash brown potatoes with sautéed spinach, peppers, mushrooms and onion, toast and homemade jam.' },
  { id: 'vegan-oatmeal', category: 'Vegan Options', name: 'Oatmeal Porridge & Brown Sugar with Almond Milk', price: '$5.50', description: 'Add toasted almonds $1.50. Add a fresh fruit cup (seasonal) $5.49.' },
  { id: 'vegan-breakfast-special', category: 'Vegan Options', name: 'Vegan Breakfast Special', price: '$14.99', description: '2 tomato slices, 2 Beyond Meat sausage patties, home fries and toast with vegan margarine and homemade jam.' },
  { id: 'vegan-beyond-burger', category: 'Vegan Options', name: 'Beyond Meat Burger', price: '$20.00', description: 'Vegan Canadian cheese, vegan mayo, tomato, lettuce and pickle on a vegan brioche bun. Served with fries, home fries or salad.' },
  { id: 'vegan-mediterranean-wrap', category: 'Vegan Options', name: 'Mediterranean Wrap', price: '$18.49', description: 'Grilled eggplant, peppers, onions, zucchini, vegan mayo, hummus and vegan feta. Served with fries, home fries or salad.' },
  { id: 'vegan-quesadilla', category: 'Vegan Options', name: 'Vegetable Quesadilla', price: '$17.49', description: 'Stuffed with guacamole, tomatoes, peppers, onion, vegan cheese and a side of salsa.' },

  // Fish & Chips — Fridays 4:30PM–8PM, dine-in and take-out
  { id: 'fish-chips-1pc', category: 'Fish & Chips (Fridays)', name: '1 Piece Haddock', price: '$15.95', description: 'With coleslaw and tartar sauce.' },
  { id: 'fish-chips-2pc', category: 'Fish & Chips (Fridays)', name: '2 Piece Haddock', price: '$25.95', description: 'With coleslaw and tartar sauce.' },
];
