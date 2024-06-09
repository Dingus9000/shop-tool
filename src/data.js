import { writeFile } from 'fs';




const shops = [
    {name: "BlacksmithArmory", items :[
      {
        "Item Name": "[Armor]"
      },
      {
        "Item Name": "Light Armor"
      },
      {
        "Item Name": "Studded Leather",
        "Cost (Normal)": "45 gp",
        "Cost (Cheap)": "33 gp",
        "Cost (Expensive)": "68 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Medium Armor"
      },
      {
        "Item Name": "Chain Shirt",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Scale Mail",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Breastplate",
        "Cost (Normal)": "400 gp",
        "Cost (Cheap)": "300 gp",
        "Cost (Expensive)": "600 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Half Plate",
        "Cost (Normal)": "750 gp",
        "Cost (Cheap)": "562 gp",
        "Cost (Expensive)": "1125 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Heavy Armor"
      },
      {
        "Item Name": "Ring Mail",
        "Cost (Normal)": "30 gp",
        "Cost (Cheap)": "22 gp",
        "Cost (Expensive)": "45 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Chain Mail",
        "Cost (Normal)": "75 gp",
        "Cost (Cheap)": "56 gp",
        "Cost (Expensive)": "113 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Splint",
        "Cost (Normal)": "200 gp",
        "Cost (Cheap)": "150 gp",
        "Cost (Expensive)": "300 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Plate",
        "Cost (Normal)": "1500 gp",
        "Cost (Cheap)": "1125 gp",
        "Cost (Expensive)": "2250 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Shield"
      },
      {
        "Item Name": "Shield",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Weapons]"
      },
      {
        "Item Name": "Simple Melee Weapons"
      },
      {
        "Item Name": "Dagger",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Handaxe",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Javelin",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Light Hammer",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Mace",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Sickle",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Spear",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Martial Melee Weapons"
      },
      {
        "Item Name": "Battleaxe",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Flail",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Glaive",
        "Cost (Normal)": "20 gp",
        "Cost (Cheap)": "15 gp",
        "Cost (Expensive)": "30 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Greataxe",
        "Cost (Normal)": "30 gp",
        "Cost (Cheap)": "22 gp",
        "Cost (Expensive)": "45 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Greatsword",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Halberd",
        "Cost (Normal)": "20 gp",
        "Cost (Cheap)": "15 gp",
        "Cost (Expensive)": "30 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Lance",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Longsword",
        "Cost (Normal)": "15 gp",
        "Cost (Cheap)": "11 gp",
        "Cost (Expensive)": "22 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Maul",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Morningstar",
        "Cost (Normal)": "15 gp",
        "Cost (Cheap)": "11 gp",
        "Cost (Expensive)": "22 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Pike",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Rapier",
        "Cost (Normal)": "25 gp",
        "Cost (Cheap)": "18 gp",
        "Cost (Expensive)": "38 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Scimitar",
        "Cost (Normal)": "25 gp",
        "Cost (Cheap)": "18 gp",
        "Cost (Expensive)": "38 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Shortsword",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Trident",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "War Pick",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Warhammer",
        "Cost (Normal)": "15 gp",
        "Cost (Cheap)": "11 gp",
        "Cost (Expensive)": "22 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Adventuring Gear]"
      },
      {
        "Item Name": "Ball Bearings (bag of 1,000)",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Bell",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Block and Tackle",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Chain (10 feet)",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Crowbar",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Grappling Hook",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Hammer",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Hammer, Sledge",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Hunting Trap",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Lamp",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Lantern, Bullseye",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Lantern, Hooded",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Lock",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Manacles",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Mirror, Steel",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Pick, Miner's",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Piton",
        "Cost (Normal)": "5 cp",
        "Cost (Cheap)": "3 cp",
        "Cost (Expensive)": "8 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Pot, Iron",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Rural Locale": "X",
        "Urban Locale": "X"
      },
      {
        "Item Name": "Spikes, Iron",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Whetstone",
        "Cost (Normal)": "1 cp",
        "Cost (Cheap)": "1 cp",
        "Cost (Expensive)": "2 cp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Tools]"
      },
      {
        "Item Name": "Artisan's Tools"
      },
      {
        "Item Name": "Carpenter's Tools",
        "Cost (Normal)": "8 gp",
        "Cost (Cheap)": "6 gp",
        "Cost (Expensive)": "12 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Mason's Tools",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Smith's Tools",
        "Cost (Normal)": "20 gp",
        "Cost (Cheap)": "15 gp",
        "Cost (Expensive)": "30 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Tinker's Tools",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Musical Instrument"
      },
      {
        "Item Name": "Horn",
        "Cost (Normal)": "3 gp",
        "Cost (Cheap)": "2 gp",
        "Cost (Expensive)": "5 gp",
        "Premium Locale": "X"
      }
    ]},
    {name: "FletcherBowyer", items :[
      {
        "Item Name": "[Weapons]"
      },
      {
        "Item Name": "Simple Ranged Weapons"
      },
      {
        "Item Name": "Crossbow, Light",
        "Cost (Normal)": "25 gp",
        "Cost (Cheap)": "18 gp",
        "Cost (Expensive)": "38 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Shortbow",
        "Cost (Normal)": "25 gp",
        "Cost (Cheap)": "18 gp",
        "Cost (Expensive)": "38 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Martial Ranged Weapons"
      },
      {
        "Item Name": "Crossbow, Hand",
        "Cost (Normal)": "75 gp",
        "Cost (Cheap)": "56 gp",
        "Cost (Expensive)": "113 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Crossbow, Heavy",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Longbow",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Adventuring Gear]"
      },
      {
        "Item Name": "Ammunition"
      },
      {
        "Item Name": "Arrows (20)",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Crossbow Bolts (20)",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Bowstring (5)",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Case, Crossbow Bolt",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Quiver",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      }
    ]},
    {name: "Leatherworker", items :[
      {
        "Item Name": "[Armor]"
      },
      {
        "Item Name": "Light Armor"
      },
      {
        "Item Name": "Leather",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Studded Leather",
        "Cost (Normal)": "45 gp",
        "Cost (Cheap)": "33 gp",
        "Cost (Expensive)": "68 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Medium Armor"
      },
      {
        "Item Name": "Hide",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Shield"
      },
      {
        "Item Name": "Shield",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Weapons]"
      },
      {
        "Item Name": "Simple Ranged Weapons"
      },
      {
        "Item Name": "Sling",
        "Cost (Normal)": "1 sp",
        "Cost (Cheap)": "7 cp",
        "Cost (Expensive)": "2 sp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Adventuring Gear]"
      },
      {
        "Item Name": "Waterskin",
        "Cost (Normal)": "2 sp",
        "Cost (Cheap)": "1 sp",
        "Cost (Expensive)": "3 sp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Tools]"
      },
      {
        "Item Name": "Artisan's Tools"
      },
      {
        "Item Name": "Cobbler's Tools",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Leatherworker's Tools",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Musical Instrument"
      },
      {
        "Item Name": "Bagpipes",
        "Cost (Normal)": "30 gp",
        "Cost (Cheap)": "22 gp",
        "Cost (Expensive)": "45 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Drum",
        "Cost (Normal)": "6 gp",
        "Cost (Cheap)": "4 gp",
        "Cost (Expensive)": "9 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      }
    ]},
    {name: "TempleFaithSupplies", items :[
      {
        "Item Name": "[Adventuring Gear]"
      },
      {
        "Item Name": "Alms Box",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Rural Locale": "O",
        "Urban Locale": "O",
        "Premium Locale": "O"
      },
      {
        "Item Name": "Bell",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Blanket",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Book, Scripture",
        "Cost (Normal)": "25 gp",
        "Cost (Cheap)": "18 gp",
        "Cost (Expensive)": "38 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Candle",
        "Cost (Normal)": "1 cp",
        "Cost (Cheap)": "1 cp",
        "Cost (Expensive)": "2 cp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Case, Map or Scroll",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Censer",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Rural Locale": "O",
        "Urban Locale": "O",
        "Premium Locale": "O"
      },
      {
        "Item Name": "Chalk (1 piece)",
        "Cost (Normal)": "1 cp",
        "Cost (Cheap)": "1 cp",
        "Cost (Expensive)": "2 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Flask",
        "Cost (Normal)": "2 cp",
        "Cost (Cheap)": "1 cp",
        "Cost (Expensive)": "3 cp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Healer's Kit",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Holy Symbol"
      },
      {
        "Item Name": "Amulet",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Emblem",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Reliquary",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Holy Water (flask)",
        "Cost (Normal)": "25 gp",
        "Cost (Cheap)": "18 gp",
        "Cost (Expensive)": "38 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Incense (1 block)",
        "Cost (Normal)": "1 cp",
        "Cost (Cheap)": "1 cp",
        "Cost (Expensive)": "2 cp",
        "Rural Locale": "O",
        "Urban Locale": "O",
        "Premium Locale": "O"
      },
      {
        "Item Name": "Ink (1 ounce bottle)",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Ink Pen (Fountain)",
        "Cost (Normal)": "3 gp",
        "Cost (Cheap)": "2 gp",
        "Cost (Expensive)": "5 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Lamp",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Lantern, Hooded",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Oil (flask)",
        "Cost (Normal)": "1 sp",
        "Cost (Cheap)": "7 cp",
        "Cost (Expensive)": "2 sp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Paper (one sheet)",
        "Cost (Normal)": "2 sp",
        "Cost (Cheap)": "1 sp",
        "Cost (Expensive)": "3 sp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Parchment (one sheet)",
        "Cost (Normal)": "1 sp",
        "Cost (Cheap)": "7 cp",
        "Cost (Expensive)": "2 sp",
        "Urban Locale": "X"
      },
      {
        "Item Name": "Perfume (vial)",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Potion of Healing",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Rations (1 day)",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Torch",
        "Cost (Normal)": "1 cp",
        "Cost (Cheap)": "1 cp",
        "Cost (Expensive)": "2 cp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Vial",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Waterskin",
        "Cost (Normal)": "2 sp",
        "Cost (Cheap)": "1 sp",
        "Cost (Expensive)": "3 sp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Tools]"
      },
      {
        "Item Name": "Artisan's Tools"
      },
      {
        "Item Name": "Calligrapher's Supplies",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Urban Locale": "O",
        "Premium Locale": "O"
      },
      {
        "Item Name": "Herbalism Kit",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Musical Instrument"
      },
      {
        "Item Name": "Flute",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Premium Locale": "O"
      },
      {
        "Item Name": "Lyre",
        "Cost (Normal)": "30 gp",
        "Cost (Cheap)": "22 gp",
        "Cost (Expensive)": "45 gp",
        "Premium Locale": "O"
      },
      {
        "Item Name": "Horn",
        "Cost (Normal)": "3 gp",
        "Cost (Cheap)": "2 gp",
        "Cost (Expensive)": "5 gp",
        "Premium Locale": "O"
      },
      {
        "Item Name": "[Services]"
      },
      {
        "Item Name": "Spellcasting"
      },
      {
        "Item Name": "Cure Wounds (lvl 1)",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Gentle Repose (lvl 2)",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Lesser Restoration (lvl 2)",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Remove Curse (lvl 3)",
        "Cost (Normal)": "100 gp",
        "Cost (Cheap)": "75 gp",
        "Cost (Expensive)": "150 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Revivify (lvl 3)",
        "Cost (Normal)": "400 gp",
        "Cost (Cheap)": "375 gp",
        "Cost (Expensive)": "450 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Raise Dead (lvl 5)",
        "Cost (Normal)": "1000 gp",
        "Cost (Cheap)": "875 gp",
        "Cost (Expensive)": "1250 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      }
    ]},
    {name: "BookPricesLibraryOrOtherwise", items :[
      {
        "Item Name": "[Book]"
      },
      {
        "Item Name": "Common, Soft Bound",
        "Cost (Normal)": "8 gp",
        "Cost (Cheap)": "6 gp",
        "Cost (Expensive)": "12 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X"
      },
      {
        "Item Name": "Common, Hard Bound",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Uncommon, Soft Bound",
        "Cost (Normal)": "15 gp",
        "Cost (Cheap)": "11 gp",
        "Cost (Expensive)": "23 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Uncommon, Hard Bound",
        "Cost (Normal)": "20 gp",
        "Cost (Cheap)": "14 sp",
        "Cost (Expensive)": "30 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Rare, Soft Bound",
        "Cost (Normal)": "30 gp",
        "Cost (Cheap)": "22 gp",
        "Cost (Expensive)": "45 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Rare, Hard Bound",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      }
    ]},
    {name: "GeneralStore", items :[
      {
        "Item Name": "[Adventuring Gear]"
      },
      {
        "Item Name": "Abacus",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Barrel",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Blanket",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Bottle, glass",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Bucket",
        "Cost (Normal)": "5 cp",
        "Cost (Cheap)": "3 cp",
        "Cost (Expensive)": "8 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Candle",
        "Cost (Normal)": "1 cp",
        "Cost (Cheap)": "1 cp",
        "Cost (Expensive)": "2 cp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Chest",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Clothes, Common",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Clothes, Fine",
        "Cost (Normal)": "15 gp",
        "Cost (Cheap)": "11 gp",
        "Cost (Expensive)": "23 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Flask or Tankard",
        "Cost (Normal)": "2 cp",
        "Cost (Cheap)": "1 cp",
        "Cost (Expensive)": "3 cp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Ink (1 ounce bottle)",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Ink Pen (Fountain)",
        "Cost (Normal)": "3 gp",
        "Cost (Cheap)": "2 gp",
        "Cost (Expensive)": "5 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Journal, Soft Bound, 25 Sheets",
        "Cost (Normal)": "7 gp",
        "Cost (Cheap)": "5 gp",
        "Cost (Expensive)": "11 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Jug or Pitcher",
        "Cost (Normal)": "2 cp",
        "Cost (Cheap)": "1 cp",
        "Cost (Expensive)": "3 cp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Ladder (10-foot)",
        "Cost (Normal)": "1 sp",
        "Cost (Cheap)": "7 cp",
        "Cost (Expensive)": "2 sp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Lantern, Hooded",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Lamp",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Lock",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Mess Kit",
        "Cost (Normal)": "2 sp",
        "Cost (Cheap)": "1 sp",
        "Cost (Expensive)": "3 sp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Mirror, Steel",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Paper (one sheet)",
        "Cost (Normal)": "2 sp",
        "Cost (Cheap)": "1 sp",
        "Cost (Expensive)": "3 sp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Parchment (one sheet)",
        "Cost (Normal)": "1 sp",
        "Cost (Cheap)": "7 cp",
        "Cost (Expensive)": "2 sp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X"
      },
      {
        "Item Name": "Pick, Miner's",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Pot, Iron",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Pouch",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Rope, Hempen (50 feet)",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Rope, Silk (50 feet)",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Sack",
        "Cost (Normal)": "1 cp",
        "Cost (Cheap)": "1 cp",
        "Cost (Expensive)": "2 cp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Scale, Merchant's",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Shovel",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Signet Ring",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Soap",
        "Cost (Normal)": "2 cp",
        "Cost (Cheap)": "1 cp",
        "Cost (Expensive)": "3 cp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Vial",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Tools]"
      },
      {
        "Item Name": "Artisan's Tools"
      },
      {
        "Item Name": "Carpenter's Tools",
        "Cost (Normal)": "8 gp",
        "Cost (Cheap)": "6 gp",
        "Cost (Expensive)": "12 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Cobbler's Tools",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Cook's Utensils",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Glassblower's Tools",
        "Cost (Normal)": "30 gp",
        "Cost (Cheap)": "22 gp",
        "Cost (Expensive)": "45 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Leatherworker's Tools",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Mason's Tools",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Potter's Tools",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Smith's Tools",
        "Cost (Normal)": "20 gp",
        "Cost (Cheap)": "15 gp",
        "Cost (Expensive)": "30 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Weaver's Tools",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Woodcarver's Tools",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      }
    ]},
    {name: "AdventuringSupplies", items :[
      {
        "Item Name": "[Armor]"
      },
      {
        "Item Name": "Light Armor"
      },
      {
        "Item Name": "Padded",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Leather",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Studded Leather",
        "Cost (Normal)": "45 gp",
        "Cost (Cheap)": "33 gp",
        "Cost (Expensive)": "68 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Medium Armor"
      },
      {
        "Item Name": "Hide",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Weapons]"
      },
      {
        "Item Name": "Simple Melee Weapons"
      },
      {
        "Item Name": "Club",
        "Cost (Normal)": "1 sp",
        "Cost (Cheap)": "7 cp",
        "Cost (Expensive)": "2 sp",
        "Rural Locale": "X"
      },
      {
        "Item Name": "Dagger",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Greatclub",
        "Cost (Normal)": "2 sp",
        "Cost (Cheap)": "1 sp",
        "Cost (Expensive)": "3 sp",
        "Rural Locale": "X",
        "Urban Locale": "X"
      },
      {
        "Item Name": "Handaxe",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Light Hammer",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Quarterstaff",
        "Cost (Normal)": "2 sp",
        "Cost (Cheap)": "1 sp",
        "Cost (Expensive)": "3 sp",
        "Rural Locale": "X",
        "Urban Locale": "X"
      },
      {
        "Item Name": "Simple Ranged Weapons"
      },
      {
        "Item Name": "Crossbow, Light",
        "Cost (Normal)": "25 gp",
        "Cost (Cheap)": "18 gp",
        "Cost (Expensive)": "38 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Dart",
        "Cost (Normal)": "5 cp",
        "Cost (Cheap)": "3 cp",
        "Cost (Expensive)": "8 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Shortbow",
        "Cost (Normal)": "25 gp",
        "Cost (Cheap)": "18 gp",
        "Cost (Expensive)": "38 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Sling",
        "Cost (Normal)": "1 sp",
        "Cost (Cheap)": "7 cp",
        "Cost (Expensive)": "2 sp",
        "Rural Locale": "X",
        "Urban Locale": "X"
      },
      {
        "Item Name": "Martial Melee Weapons"
      },
      {
        "Item Name": "Whip",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Martial Ranged Weapons"
      },
      {
        "Item Name": "Blowgun",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Rural Locale": "X"
      },
      {
        "Item Name": "Crossbow, hand",
        "Cost (Normal)": "75 gp",
        "Cost (Cheap)": "56 gp",
        "Cost (Expensive)": "113 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Crossbow, heavy",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Longbow",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Adventuring Gear]"
      },
      {
        "Item Name": "Ammunition"
      },
      {
        "Item Name": "Arrows (20)",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Blowgun Needles (50)",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Rural Locale": "X"
      },
      {
        "Item Name": "Crossbow Bolts (20)",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Sling Bullets (20)",
        "Cost (Normal)": "4 cp",
        "Cost (Cheap)": "3 cp",
        "Cost (Expensive)": "6 cp",
        "Rural Locale": "X",
        "Urban Locale": "X"
      },
      {
        "Item Name": "Backpack",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Bedroll",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Blanket",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Block and Tackle",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Bottle, glass",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Candle",
        "Cost (Normal)": "1 cp",
        "Cost (Cheap)": "1 cp",
        "Cost (Expensive)": "2 cp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Case, Crossbow Bolt",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Case, Map or Scroll",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Chain (10 feet)",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Chest",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Climber's Kit",
        "Cost (Normal)": "25 gp",
        "Cost (Cheap)": "18 gp",
        "Cost (Expensive)": "38 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Clothes, Traveler's",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Crowbar",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Flask or Tankard",
        "Cost (Normal)": "2 cp",
        "Cost (Cheap)": "1 cp",
        "Cost (Expensive)": "3 cp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Grappling Hook",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Hammer",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Healer's Kit",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Hourglass",
        "Cost (Normal)": "25 gp",
        "Cost (Cheap)": "18 gp",
        "Cost (Expensive)": "38 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Hunting Trap",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Ink (1 ounce bottle)",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Ink Pen (Fountain)",
        "Cost (Normal)": "3 gp",
        "Cost (Cheap)": "2 gp",
        "Cost (Expensive)": "5 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Jug or Pitcher",
        "Cost (Normal)": "2 cp",
        "Cost (Cheap)": "1 cp",
        "Cost (Expensive)": "3 cp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Ladder (10-foot)",
        "Cost (Normal)": "1 sp",
        "Cost (Cheap)": "7 cp",
        "Cost (Expensive)": "2 sp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Lantern, Bullseye",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Lantern, Hooded",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Lock",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Mess Kit",
        "Cost (Normal)": "2 sp",
        "Cost (Cheap)": "1 sp",
        "Cost (Expensive)": "3 sp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Mirror, Steel",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Paper (one sheet)",
        "Cost (Normal)": "2 sp",
        "Cost (Cheap)": "1 sp",
        "Cost (Expensive)": "3 sp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Parchment (one sheet)",
        "Cost (Normal)": "1 sp",
        "Cost (Cheap)": "7 cp",
        "Cost (Expensive)": "2 sp",
        "Rural Locale": "X",
        "Urban Locale": "X"
      },
      {
        "Item Name": "Pick, Miner's",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Piton",
        "Cost (Normal)": "5 cp",
        "Cost (Cheap)": "3 cp",
        "Cost (Expensive)": "8 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Pole (10-foot)",
        "Cost (Normal)": "5 cp",
        "Cost (Cheap)": "3 cp",
        "Cost (Expensive)": "8 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Pot, Iron",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Pouch",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Quiver",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Rations (1 day)",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Rope, Hempen (50 feet)",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Rope, Silk (50 feet)",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Sack",
        "Cost (Normal)": "1 cp",
        "Cost (Cheap)": "1 cp",
        "Cost (Expensive)": "2 cp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Shovel",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Signal Whistle",
        "Cost (Normal)": "5 cp",
        "Cost (Cheap)": "3 cp",
        "Cost (Expensive)": "8 cp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Signet Ring",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Spyglass",
        "Cost (Normal)": "1000 gp",
        "Cost (Cheap)": "750 gp",
        "Cost (Expensive)": "1500 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Tent, Two-person",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Tinderbox",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Torch",
        "Cost (Normal)": "1 cp",
        "Cost (Cheap)": "1 cp",
        "Cost (Expensive)": "2 cp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Vial",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Waterskin",
        "Cost (Normal)": "2 sp",
        "Cost (Cheap)": "1 sp",
        "Cost (Expensive)": "3 sp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Tools]"
      },
      {
        "Item Name": "Artisan's Tools"
      },
      {
        "Item Name": "Cartographer's Tools",
        "Cost (Normal)": "15 gp",
        "Cost (Cheap)": "11 gp",
        "Cost (Expensive)": "23 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Jeweler's Tools",
        "Cost (Normal)": "25 gp",
        "Cost (Cheap)": "18 gp",
        "Cost (Expensive)": "38 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Tinker's Tools",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Herbalism Kit",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Navigator's Tools",
        "Cost (Normal)": "25 gp",
        "Cost (Cheap)": "18 gp",
        "Cost (Expensive)": "38 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Water-side Theme"
      },
      {
        "Item Name": "[Weapons]"
      },
      {
        "Item Name": "Simple Melee Weapons"
      },
      {
        "Item Name": "Spear",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Martial Ranged Weapons"
      },
      {
        "Item Name": "Net",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Adventuring Gear]"
      },
      {
        "Item Name": "Fishing Tackle",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Waterborne Vehicles]"
      },
      {
        "Item Name": "Rowboat",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Trade Goods]"
      },
      {
        "Item Name": "1 lb. of Fishing Bait",
        "Cost (Normal)": "5 cp",
        "Cost (Cheap)": "3 cp",
        "Cost (Expensive)": "8 cp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Magical Theme"
      },
      {
        "Item Name": "[Adventuring Gear]"
      },
      {
        "Item Name": "Arcane Focus"
      },
      {
        "Item Name": "Crystal",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Orb",
        "Cost (Normal)": "20 gp",
        "Cost (Cheap)": "15 gp",
        "Cost (Expensive)": "30 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Rod",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Staff",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Wand",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Component Pouch",
        "Cost (Normal)": "25 gp",
        "Cost (Cheap)": "18 gp",
        "Cost (Expensive)": "38 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Potion of Healing",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Spellbook",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Shady Dealer Theme"
      },
      {
        "Item Name": "[Adventuring Gear]"
      },
      {
        "Item Name": "Acid (vial)",
        "Cost (Normal)": "25 gp",
        "Cost (Cheap)": "18 gp",
        "Cost (Expensive)": "38 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Antitoxin (vial)",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Caltrops (bag of 20)",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Clothes, Costume",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Manacles",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Oil (flask)",
        "Cost (Normal)": "1 sp",
        "Cost (Cheap)": "7 cp",
        "Cost (Expensive)": "2 sp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Poison, Basic (vial)",
        "Cost (Normal)": "100 gp",
        "Cost (Cheap)": "75 gp",
        "Cost (Expensive)": "150 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Ram, Portable",
        "Cost (Normal)": "4 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "6 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Spikes, Iron (10)",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Tools]"
      },
      {
        "Item Name": "Disguise Kit",
        "Cost (Normal)": "25 gp",
        "Cost (Cheap)": "18 gp",
        "Cost (Expensive)": "38 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Forgery Kit",
        "Cost (Normal)": "15 gp",
        "Cost (Cheap)": "11 gp",
        "Cost (Expensive)": "23 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Gaming Set"
      },
      {
        "Item Name": "Dice Set",
        "Cost (Normal)": "1 sp",
        "Cost (Cheap)": "7 cp",
        "Cost (Expensive)": "2 sp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Playing Card Set",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Poisoner's Kit",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Thieves' Tools",
        "Cost (Normal)": "25 gp",
        "Cost (Cheap)": "18 gp",
        "Cost (Expensive)": "38 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Art and Games Theme"
      },
      {
        "Item Name": "[Tools]"
      },
      {
        "Item Name": "Artisan's Tools"
      },
      {
        "Item Name": "Calligrapher's Supplies",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "8 gp",
        "Cost (Expensive)": "15 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Glassblower's Tools",
        "Cost (Normal)": "30 gp",
        "Cost (Cheap)": "22 gp",
        "Cost (Expensive)": "45 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Painter's Supplies",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "8 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Potter's Tools",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "8 gp",
        "Cost (Expensive)": "15 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Weaver's Tools",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Woodcarver's Tools",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Disguise Kit",
        "Cost (Normal)": "25 gp",
        "Cost (Cheap)": "18 gp",
        "Cost (Expensive)": "38 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Gaming Set"
      },
      {
        "Item Name": "Dice Set",
        "Cost (Normal)": "1 sp",
        "Cost (Cheap)": "7 cp",
        "Cost (Expensive)": "2 sp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Dragonchess Set",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Playing Card Set",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Three-Dragon Ante Set",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Musical Instrument"
      },
      {
        "Item Name": "Bagpipes",
        "Cost (Normal)": "30 gp",
        "Cost (Cheap)": "22 gp",
        "Cost (Expensive)": "45 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Drum",
        "Cost (Normal)": "6 gp",
        "Cost (Cheap)": "4 gp",
        "Cost (Expensive)": "9 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Dulcimer",
        "Cost (Normal)": "25 gp",
        "Cost (Cheap)": "18 gp",
        "Cost (Expensive)": "38 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Flute",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Lute",
        "Cost (Normal)": "35 gp",
        "Cost (Cheap)": "26 gp",
        "Cost (Expensive)": "53 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Lyre",
        "Cost (Normal)": "30 gp",
        "Cost (Cheap)": "22 gp",
        "Cost (Expensive)": "45 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Horn",
        "Cost (Normal)": "3 gp",
        "Cost (Cheap)": "2 gp",
        "Cost (Expensive)": "5 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Pan Flute",
        "Cost (Normal)": "12 gp",
        "Cost (Cheap)": "9 gp",
        "Cost (Expensive)": "18 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Shawn",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Viol",
        "Cost (Normal)": "30 gp",
        "Cost (Cheap)": "22 gp",
        "Cost (Expensive)": "45 gp",
        "Premium Locale": "X"
      }
    ]},
    {name: "TailorTextiles", items :[
      {
        "Tailor/Textiles": "[Adventuring Gear]"
      },
      {
        "Tailor/Textiles": "Basket",
        "__EMPTY": "4 sp",
        "__EMPTY_1": "3 sp",
        "__EMPTY_2": "6 sp",
        "__EMPTY_3": "X",
        "__EMPTY_4": "X",
        "__EMPTY_5": "X",
        "__EMPTY_6": "X"
      },
      {
        "Tailor/Textiles": "Cloak, Canvas",
        "__EMPTY": "7 sp",
        "__EMPTY_1": "5 sp",
        "__EMPTY_2": "11 sp",
        "__EMPTY_4": "X",
        "__EMPTY_5": "X",
        "__EMPTY_6": "X"
      },
      {
        "Tailor/Textiles": "Cloak, Leather",
        "__EMPTY": "2 gp",
        "__EMPTY_1": "1 gp",
        "__EMPTY_2": "3 gp",
        "__EMPTY_3": "X",
        "__EMPTY_5": "X",
        "__EMPTY_6": "X"
      },
      {
        "Tailor/Textiles": "Cloak, Leather, Lined",
        "__EMPTY": "4 gp",
        "__EMPTY_1": "3 gp",
        "__EMPTY_2": "6 gp",
        "__EMPTY_3": "X",
        "__EMPTY_5": "X",
        "__EMPTY_6": "X"
      },
      {
        "Tailor/Textiles": "Clothes, Common",
        "__EMPTY": "5 sp",
        "__EMPTY_1": "3 sp",
        "__EMPTY_2": "8 sp",
        "__EMPTY_3": "X",
        "__EMPTY_4": "X",
        "__EMPTY_5": "X",
        "__EMPTY_6": "X"
      },
      {
        "Tailor/Textiles": "Clothes, Costume",
        "__EMPTY": "5 gp",
        "__EMPTY_1": "3 gp",
        "__EMPTY_2": "8 gp",
        "__EMPTY_6": "X"
      },
      {
        "Tailor/Textiles": "Clothes, Fine",
        "__EMPTY": "15 gp",
        "__EMPTY_1": "11 gp",
        "__EMPTY_2": "23 gp",
        "__EMPTY_5": "X",
        "__EMPTY_6": "X"
      },
      {
        "Tailor/Textiles": "Clothes, Traveler's",
        "__EMPTY": "2 gp",
        "__EMPTY_1": "1 gp",
        "__EMPTY_2": "3 gp",
        "__EMPTY_4": "X",
        "__EMPTY_5": "X",
        "__EMPTY_6": "X"
      },
      {
        "Tailor/Textiles": "Component Pouch",
        "__EMPTY": "25 gp",
        "__EMPTY_1": "18 gp",
        "__EMPTY_2": "38 gp",
        "__EMPTY_6": "X"
      },
      {
        "Tailor/Textiles": "Pouch",
        "__EMPTY": "5 sp",
        "__EMPTY_1": "3 sp",
        "__EMPTY_2": "8 sp",
        "__EMPTY_3": "X",
        "__EMPTY_4": "X",
        "__EMPTY_5": "X",
        "__EMPTY_6": "X"
      },
      {
        "Tailor/Textiles": "Robes",
        "__EMPTY": "1 gp",
        "__EMPTY_1": "7 sp",
        "__EMPTY_2": "2 gp",
        "__EMPTY_4": "X",
        "__EMPTY_5": "X",
        "__EMPTY_6": "X"
      },
      {
        "Tailor/Textiles": "Sack",
        "__EMPTY": "1 cp",
        "__EMPTY_1": "1 cp",
        "__EMPTY_2": "2 cp",
        "__EMPTY_3": "X",
        "__EMPTY_4": "X",
        "__EMPTY_5": "X",
        "__EMPTY_6": "X"
      },
      {
        "Tailor/Textiles": "Tent, Two-person",
        "__EMPTY": "2 gp",
        "__EMPTY_1": "1 gp",
        "__EMPTY_2": "3 gp",
        "__EMPTY_5": "X",
        "__EMPTY_6": "X"
      },
      {
        "Tailor/Textiles": "[Miscellaneous]"
      },
      {
        "Tailor/Textiles": "Bone Needle (5)",
        "__EMPTY": "3 cp",
        "__EMPTY_1": "2 cp",
        "__EMPTY_2": "5 cp",
        "__EMPTY_4": "X",
        "__EMPTY_5": "X",
        "__EMPTY_6": "X"
      },
      {
        "Tailor/Textiles": "Steel Needle (1)",
        "__EMPTY": "1 sp",
        "__EMPTY_1": "1 sp",
        "__EMPTY_2": "2 sp",
        "__EMPTY_5": "X",
        "__EMPTY_6": "X"
      },
      {
        "Tailor/Textiles": "Cotton Thread (30 feet)",
        "__EMPTY": "5 sp",
        "__EMPTY_1": "3 sp",
        "__EMPTY_2": "8 sp",
        "__EMPTY_3": "X",
        "__EMPTY_5": "X",
        "__EMPTY_6": "X"
      },
      {
        "Tailor/Textiles": "Leather Cord (15 feet)",
        "__EMPTY": "1 gp",
        "__EMPTY_1": "7 sp",
        "__EMPTY_2": "2 gp",
        "__EMPTY_3": "X",
        "__EMPTY_4": "X",
        "__EMPTY_5": "X",
        "__EMPTY_6": "X"
      },
      {
        "Tailor/Textiles": "[Tools]"
      },
      {
        "Tailor/Textiles": "Artisan's Tools"
      },
      {
        "Tailor/Textiles": "Weaver's Tools",
        "__EMPTY": "1 gp",
        "__EMPTY_1": "7 sp",
        "__EMPTY_2": "2 gp",
        "__EMPTY_3": "X",
        "__EMPTY_4": "X",
        "__EMPTY_5": "X",
        "__EMPTY_6": "X"
      }
    ]},
    {name: "Transportation", items :[
      {
        "Item Name": "[Mounts & Other Animals]"
      },
      {
        "Item Name": "Camel – 50 ft – 480 lbs",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Urban Locale": "X"
      },
      {
        "Item Name": "Donkey/ Mule – 40 ft – 420 lbs",
        "Cost (Normal)": "8 gp",
        "Cost (Cheap)": "6 gp",
        "Cost (Expensive)": "12 gp",
        "Rural Locale": "X",
        "Urban Locale": "X"
      },
      {
        "Item Name": "Elephant – 40 ft – 1,320 lbs",
        "Cost (Normal)": "200 gp",
        "Cost (Cheap)": "140 gp",
        "Cost (Expensive)": "300 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Horse, draft – 40 ft – 540 lbs",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X"
      },
      {
        "Item Name": "Horse, riding – 60 ft – 480 lbs",
        "Cost (Normal)": "75 gp",
        "Cost (Cheap)": "56 gp",
        "Cost (Expensive)": "113 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Mastiff – 40 ft – 195 lbs",
        "Cost (Normal)": "25 gp",
        "Cost (Cheap)": "18 gp",
        "Cost (Expensive)": "38 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Pony – 40 ft – 225 lbs",
        "Cost (Normal)": "30 gp",
        "Cost (Cheap)": "22 gp",
        "Cost (Expensive)": "45 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Warhorse – 60 ft – 540 lbs",
        "Cost (Normal)": "400 gp",
        "Cost (Cheap)": "280 gp",
        "Cost (Expensive)": "600 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Tack & Drawn Vehicles]"
      },
      {
        "Item Name": "Barding",
        "Cost (Normal)": "X4",
        "Cost (Cheap)": "X3",
        "Cost (Expensive)": "X6",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Bit & Bridle",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Carriage",
        "Cost (Normal)": "100 gp",
        "Cost (Cheap)": "70 gp",
        "Cost (Expensive)": "150 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Cart",
        "Cost (Normal)": "15 gp",
        "Cost (Cheap)": "11 gp",
        "Cost (Expensive)": "23 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Chariot",
        "Cost (Normal)": "250 gp",
        "Cost (Cheap)": "175 gp",
        "Cost (Expensive)": "375 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Feed (per day)",
        "Cost (Normal)": "5 cp",
        "Cost (Cheap)": "3 cp",
        "Cost (Expensive)": "8 cp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Saddle"
      },
      {
        "Item Name": "Exotic",
        "Cost (Normal)": "60 gp",
        "Cost (Cheap)": "48 gp",
        "Cost (Expensive)": "72 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Military",
        "Cost (Normal)": "20 gp",
        "Cost (Cheap)": "15 gp",
        "Cost (Expensive)": "30 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Pack",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Riding",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Saddlebags",
        "Cost (Normal)": "4 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "6 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Sled",
        "Cost (Normal)": "20 gp",
        "Cost (Cheap)": "15 gp",
        "Cost (Expensive)": "30 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Stabling (per day)",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Wagon",
        "Cost (Normal)": "35 gp",
        "Cost (Cheap)": "28 gp",
        "Cost (Expensive)": "42 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Waterborne Vehicles]"
      },
      {
        "Item Name": "Galley",
        "Cost (Normal)": "30,000 gp",
        "Cost (Cheap)": "21,000 gp",
        "Cost (Expensive)": "40,000 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Keelboat",
        "Cost (Normal)": "3,000 gp",
        "Cost (Cheap)": "2,100 gp",
        "Cost (Expensive)": "4,000 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Longship",
        "Cost (Normal)": "10,000 gp",
        "Cost (Cheap)": "7,000 gp",
        "Cost (Expensive)": "15,000 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Rowboat",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Sailing Ship",
        "Cost (Normal)": "10,000 gp",
        "Cost (Cheap)": "7,000 gp",
        "Cost (Expensive)": "15,000 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Warship",
        "Cost (Normal)": "25,000 gp",
        "Cost (Cheap)": "17,500 gp",
        "Cost (Expensive)": "35,000 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      }
      
    ]},
    {name: "JewelerStonecutter", items :[
      {
        "Item Name": "[Adventuring Gear]"
      },
      {
        "Item Name": "Amulet/Necklace, Exquisite",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Amulet/Necklace, Mundane",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Arcane Focus"
      },
      {
        "Item Name": "Crystal",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Orb",
        "Cost (Normal)": "20 gp",
        "Cost (Cheap)": "15 gp",
        "Cost (Expensive)": "30 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Earrings, Exquisite",
        "Cost (Normal)": "4 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "6 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Earrings, Mundane",
        "Cost (Normal)": "4 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "6 sp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Jewelry (+ Gem value)",
        "__EMPTY": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Ring, Exquisite",
        "Cost (Normal)": "3 gp",
        "Cost (Cheap)": "2 gp",
        "Cost (Expensive)": "5 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Ring, Mundane",
        "Cost (Normal)": "3 sp",
        "Cost (Cheap)": "2 sp",
        "Cost (Expensive)": "5 sp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Signet Ring",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Tools]"
      },
      {
        "Item Name": "Artisan's Tools"
      },
      {
        "Item Name": "Jeweler's Tools",
        "Cost (Normal)": "25 gp",
        "Cost (Cheap)": "18 gp",
        "Cost (Expensive)": "38 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Services]"
      },
      {
        "Item Name": "Gemstone Appraisal (3 gems)",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Resizing Jewelry",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Set Gem (<100 gp value)",
        "Cost (Normal)": "45 gp",
        "Cost (Cheap)": "34 gp",
        "Cost (Expensive)": "68 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Set Gem (100-1K gp value)",
        "Cost (Normal)": "75 gp",
        "Cost (Cheap)": "56 gp",
        "Cost (Expensive)": "113 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Set Gem (1K+ gp value)",
        "Cost (Normal)": "150 gp",
        "Cost (Cheap)": "113 gp",
        "Cost (Expensive)": "225 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Stonecutting (+ value)",
        "Cost (Normal)": "0.25",
        "Cost (Cheap)": "(n/a)",
        "Cost (Expensive)": "(na/)",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Genstones by Value]"
      },
      {
        "Item Name": "[10 GP Gemstones]"
      },
      {
        "Item Name": "Azurite (Deep blue)",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Banded agate (Brown / Blue)",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Blue quartz (Pale blue)",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Eye agate (Circles, gray / blue)",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Hematite (Opaque gray-black)",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Lapis lazuli (Blue with yellow)",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Malachite (Striated greens)",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X"
      },
      {
        "Item Name": "Moss agate (Pale, moss marks)",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Obsidian (Opaque black)",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X"
      },
      {
        "Item Name": "Rhodochrosite (Light pink)",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Tiger eye (Brown, gold center)",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Turquoise (Light blue-green)",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X"
      },
      {
        "Item Name": "[50 GP Gemstones]"
      },
      {
        "Item Name": "Bloodstone (Gray with red)",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X"
      },
      {
        "Item Name": "Carnelian (Opaque oranges)",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Chalcedony (Opaque white)",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Chrysoprase (Clear green)",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Citrine (Pale yellow-brown)",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Jasper (Blue, black, or brown)",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X"
      },
      {
        "Item Name": "Moonstone (White + glow)",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Onyx (Black, white, or both)",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Quartz (Transparent range)",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X"
      },
      {
        "Item Name": "Sardonyx (Red & white)",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Star rose quartz (White star)",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Zircon (Pale blue-green)",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[100 GP Gemstones]"
      },
      {
        "Item Name": "Amber (Watery gold)",
        "Cost (Normal)": "100 gp",
        "Cost (Cheap)": "75 gp",
        "Cost (Expensive)": "150 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Amethyst (Deep purple)",
        "Cost (Normal)": "100 gp",
        "Cost (Cheap)": "75 gp",
        "Cost (Expensive)": "150 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Chrysoberyl (Yellow-green)",
        "Cost (Normal)": "100 gp",
        "Cost (Cheap)": "75 gp",
        "Cost (Expensive)": "150 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Coral (Opaque crimson)",
        "Cost (Normal)": "100 gp",
        "Cost (Cheap)": "75 gp",
        "Cost (Expensive)": "150 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Garnet (Red, or violet)",
        "Cost (Normal)": "100 gp",
        "Cost (Cheap)": "75 gp",
        "Cost (Expensive)": "150 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Jade (Green to white)",
        "Cost (Normal)": "100 gp",
        "Cost (Cheap)": "75 gp",
        "Cost (Expensive)": "150 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Jet (Opaque deep black)",
        "Cost (Normal)": "100 gp",
        "Cost (Cheap)": "75 gp",
        "Cost (Expensive)": "150 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Pearl (Lustrous white to pink)",
        "Cost (Normal)": "100 gp",
        "Cost (Cheap)": "75 gp",
        "Cost (Expensive)": "150 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Spinel (Clear red to green)",
        "Cost (Normal)": "100 gp",
        "Cost (Cheap)": "75 gp",
        "Cost (Expensive)": "150 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Tourmaline (Pale Red / Brown)",
        "Cost (Normal)": "100 gp",
        "Cost (Cheap)": "75 gp",
        "Cost (Expensive)": "150 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[500 GP Gemstones]"
      },
      {
        "Item Name": "Alexandrite (Dark green)",
        "Cost (Normal)": "500 gp",
        "Cost (Cheap)": "375 gp",
        "Cost (Expensive)": "750 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Aquamarine (Pale green-blue)",
        "Cost (Normal)": "500 gp",
        "Cost (Cheap)": "375 gp",
        "Cost (Expensive)": "750 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Black pearl (Pure black)",
        "Cost (Normal)": "500 gp",
        "Cost (Cheap)": "375 gp",
        "Cost (Expensive)": "750 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Blue spinel (Deep blue)",
        "Cost (Normal)": "500 gp",
        "Cost (Cheap)": "375 gp",
        "Cost (Expensive)": "750 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Peridot (Rich olive green)",
        "Cost (Normal)": "500 gp",
        "Cost (Cheap)": "375 gp",
        "Cost (Expensive)": "750 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Topaz (Golden yellow)",
        "Cost (Normal)": "500 gp",
        "Cost (Cheap)": "375 gp",
        "Cost (Expensive)": "750 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[1000 GP Gemstones]"
      },
      {
        "Item Name": "Black Opal (Translucent green)",
        "Cost (Normal)": "1000 gp",
        "Cost (Cheap)": "750 gp",
        "Cost (Expensive)": "1500 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Blue sapphire (Shades of blue)",
        "Cost (Normal)": "1000 gp",
        "Cost (Cheap)": "750 gp",
        "Cost (Expensive)": "1500 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Emerald (Deep bright green)",
        "Cost (Normal)": "1000 gp",
        "Cost (Cheap)": "750 gp",
        "Cost (Expensive)": "1500 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Fire opal (Firey red)",
        "Cost (Normal)": "1000 gp",
        "Cost (Cheap)": "750 gp",
        "Cost (Expensive)": "1500 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Opal (Pale blue with green)",
        "Cost (Normal)": "1000 gp",
        "Cost (Cheap)": "750 gp",
        "Cost (Expensive)": "1500 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Star ruby (Ruby with star)",
        "Cost (Normal)": "1000 gp",
        "Cost (Cheap)": "750 gp",
        "Cost (Expensive)": "1500 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Star sapphire (Blue with star)",
        "Cost (Normal)": "1000 gp",
        "Cost (Cheap)": "750 gp",
        "Cost (Expensive)": "1500 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Yellow Sapphire (Firey yellow)",
        "Cost (Normal)": "1000 gp",
        "Cost (Cheap)": "750 gp",
        "Cost (Expensive)": "1500 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[5000 GP Gemstones]"
      },
      {
        "Item Name": "Black Sapphire (Lustrous black)",
        "Cost (Normal)": "5000 gp",
        "Cost (Cheap)": "3750 gp",
        "Cost (Expensive)": "7500 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Diamond (Transparent)",
        "Cost (Normal)": "5000 gp",
        "Cost (Cheap)": "3750 gp",
        "Cost (Expensive)": "7500 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Jacinth (Firey orange)",
        "Cost (Normal)": "5000 gp",
        "Cost (Cheap)": "3750 gp",
        "Cost (Expensive)": "7500 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Ruby (Shades of red)",
        "Cost (Normal)": "5000 gp",
        "Cost (Cheap)": "3750 gp",
        "Cost (Expensive)": "7500 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Powdering of Gems]"
      },
      {
        "Item Name": "10 gp Gemstones",
        "Cost (Normal)": "20 gp",
        "Cost (Cheap)": "15 gp",
        "Cost (Expensive)": "30 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "50 gp Gemstones",
        "Cost (Normal)": "70 gp",
        "Cost (Cheap)": "52 gp",
        "Cost (Expensive)": "105 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "100 gp Gemstones",
        "Cost (Normal)": "150 gp",
        "Cost (Cheap)": "113 gp",
        "Cost (Expensive)": "225 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "500 gp Gemstones",
        "Cost (Normal)": "600 gp",
        "Cost (Cheap)": "450 gp",
        "Cost (Expensive)": "900 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "1000 gp Gemstones",
        "Cost (Normal)": "1500 gp",
        "Cost (Cheap)": "1125 gp",
        "Cost (Expensive)": "2250 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "5000 gp Gemstones",
        "Cost (Normal)": "6000 gp",
        "Cost (Cheap)": "4500 gp",
        "Cost (Expensive)": "9000 gp",
        "Premium Locale": "X"
      }
    ]},
    {name: "PotionShop", items :[
      {
        "Item Name": "[Adventuring Gear]"
      },
      {
        "Item Name": "Acid (vial)",
        "Cost (Normal)": "25 gp",
        "Cost (Cheap)": "18 gp",
        "Cost (Expensive)": "38 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Alchemist's Fire (flask)",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Antitoxin (vial)",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Component Pouch",
        "Cost (Normal)": "25 gp",
        "Cost (Cheap)": "18 gp",
        "Cost (Expensive)": "38 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Oil (flask)",
        "Cost (Normal)": "1 sp",
        "Cost (Cheap)": "7 cp",
        "Cost (Expensive)": "2 sp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Perfume (vial)",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Poison, Basic (vial)",
        "Cost (Normal)": "100 gp",
        "Cost (Cheap)": "75 gp",
        "Cost (Expensive)": "150 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Potion of Healing",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Vial",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Alchemy Ingredients]"
      },
      {
        "Item Name": "Common",
        "Cost (Normal)": "3 sp",
        "Cost (Cheap)": "2sp",
        "Cost (Expensive)": "5sp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Uncommon",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Rare",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Very Rare",
        "Cost (Normal)": "30 gp",
        "Cost (Cheap)": "22 gp",
        "Cost (Expensive)": "45 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Tools]"
      },
      {
        "Item Name": "Artisan's Tools"
      },
      {
        "Item Name": "Alchemist's Supplies",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Brewer's Supplies",
        "Cost (Normal)": "20 gp",
        "Cost (Cheap)": "15 gp",
        "Cost (Expensive)": "30 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Cook's Utensils",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Poisoner's Kit",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Magic Items]"
      },
      {
        "Item Name": "Potions"
      },
      {
        "Item Name": "Common",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Uncommon",
        "Cost (Normal)": "250 gp",
        "Cost (Cheap)": "175 gp",
        "Cost (Expensive)": "375 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Rare",
        "Cost (Normal)": "2500 gp",
        "Cost (Cheap)": "1750 gp",
        "Cost (Expensive)": "3750 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Very Rare",
        "Cost (Normal)": "12500 gp",
        "Cost (Cheap)": "9375 gp",
        "Cost (Expensive)": "18750 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Legendary",
        "Cost (Normal)": "62500 gp",
        "Cost (Cheap)": "46875 gp",
        "Cost (Expensive)": "93750 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Miscellaneous]"
      },
      {
        "Item Name": "Spell Components",
        "__EMPTY": "See Spell",
        "Cost (Cheap)": "(x0.75)",
        "Cost (Expensive)": "(x1.5)",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      }
    ]},
    {name: "ArcaneShop", items :[
      {
        "Item Name": "[Weapons]"
      },
      {
        "Item Name": "Simple Melee Weapons"
      },
      {
        "Item Name": "Quarterstaff",
        "Cost (Normal)": "2 sp",
        "Cost (Cheap)": "1 sp",
        "Cost (Expensive)": "3 sp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Adventuring Gear]"
      },
      {
        "Item Name": "Abacus",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Arcane Focus"
      },
      {
        "Item Name": "Crystal",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Orb",
        "Cost (Normal)": "20 gp",
        "Cost (Cheap)": "15 gp",
        "Cost (Expensive)": "30 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Rod",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Staff",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Wand",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Bottle, glass",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Candle",
        "Cost (Normal)": "1 cp",
        "Cost (Cheap)": "1 cp",
        "Cost (Expensive)": "2 cp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Case, Map or Scroll",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Item Name",
        "Cost (Normal)": "Cost (Normal)",
        "Cost (Cheap)": "Cost (Cheap)",
        "Cost (Expensive)": "Cost (Expensive)",
        "Limited Stock": "Limited Stock",
        "Rural Locale": "Rural Locale",
        "Urban Locale": "Urban Locale",
        "Premium Locale": "Premium Locale"
      },
      {
        "Item Name": "Component Pouch",
        "Cost (Normal)": "25 gp",
        "Cost (Cheap)": "18 gp",
        "Cost (Expensive)": "38 gp"
      },
      {
        "Item Name": "Druidic Focus"
      },
      {
        "Item Name": "Sprig of Mistletoe",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Totem",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Wooden Staff",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Yew Wand",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Hourglass",
        "Cost (Normal)": "25 gp",
        "Cost (Cheap)": "18 gp",
        "Cost (Expensive)": "38 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Ink (1 ounce bottle)",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Ink Pen",
        "Cost (Normal)": "2 cp",
        "Cost (Cheap)": "1 cp",
        "Cost (Expensive)": "3 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Paper (one sheet)",
        "Cost (Normal)": "2 sp",
        "Cost (Cheap)": "1 sp",
        "Cost (Expensive)": "3 sp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Parchment (one sheet)",
        "Cost (Normal)": "1 sp",
        "Cost (Cheap)": "7 cp",
        "Cost (Expensive)": "2 sp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Pouch",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Robes",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Spellbook",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Vial",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Tools]"
      },
      {
        "Item Name": "Artisan's Tools"
      },
      {
        "Item Name": "Alchemist's Supplies",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Calligrapher's Supplies",
        "Cost (Normal)": "10 gp",
        "Cost (Cheap)": "7 gp",
        "Cost (Expensive)": "15 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Musical Instrument"
      },
      {
        "Item Name": "Lute",
        "Cost (Normal)": "35 gp",
        "Cost (Cheap)": "26 gp",
        "Cost (Expensive)": "53 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Lyre",
        "Cost (Normal)": "30 gp",
        "Cost (Cheap)": "22 gp",
        "Cost (Expensive)": "45 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Magic Items]"
      },
      {
        "Item Name": "Spell Scrolls/ Gems"
      },
      {
        "Item Name": "Common (Cantrip)",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "38 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Common (Level 1)",
        "Cost (Normal)": "100 gp",
        "Cost (Cheap)": "75 gp",
        "Cost (Expensive)": "150 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Uncommon (Level 2)",
        "Cost (Normal)": "250 gp",
        "Cost (Cheap)": "187 gp",
        "Cost (Expensive)": "375 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Uncommon (Level 3)",
        "Cost (Normal)": "500 gp",
        "Cost (Cheap)": "375 gp",
        "Cost (Expensive)": "750 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Rare (Level 4)",
        "Cost (Normal)": "2500 gp",
        "Cost (Cheap)": "1875 gp",
        "Cost (Expensive)": "3750 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Rare (Level 5)",
        "Cost (Normal)": "5000 gp",
        "Cost (Cheap)": "3750 gp",
        "Cost (Expensive)": "7500 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Services]"
      },
      {
        "Item Name": "Magic Appraisal (Identify)",
        "Cost (Normal)": "100 gp",
        "Cost (Cheap)": "75 gp",
        "Cost (Expensive)": "150 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Miscellaneous]"
      },
      {
        "Item Name": "Spell Components",
        "__EMPTY": "See Spell",
        "Cost (Cheap)": "(x0.75)",
        "Cost (Expensive)": "(x1.5)",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      }
    ]},
    {name: "CommonMealAndInnPrices", items :[
      {
        "Item Name": "[Typical Breakfast Options]"
      },
      {
        "Item Name": "Commoner"
      },
      {
        "Item Name": "“Meat” Stick",
        "Cost (Normal)": "3 cp",
        "Cost (Cheap)": "2 cp",
        "Cost (Expensive)": "5 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Roasted Locusts",
        "Cost (Normal)": "3 cp",
        "Cost (Cheap)": "2 cp",
        "Cost (Expensive)": "5 cp",
        "Rural Locale": "X"
      },
      {
        "Item Name": "Cheese Omelet",
        "Cost (Normal)": "4 cp",
        "Cost (Cheap)": "3 cp",
        "Cost (Expensive)": "6 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Ham & Cheese on Rye",
        "Cost (Normal)": "5 cp",
        "Cost (Cheap)": "3 cp",
        "Cost (Expensive)": "8 cp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Merchant"
      },
      {
        "Item Name": "Bacon & Egg Sandwich",
        "Cost (Normal)": "3 sp",
        "Cost (Cheap)": "2 sp",
        "Cost (Expensive)": "5 sp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Omelet “your’ Way",
        "Cost (Normal)": "3 sp",
        "Cost (Cheap)": "2 sp",
        "Cost (Expensive)": "5 sp",
        "Rural Locale": "X",
        "Urban Locale": "X"
      },
      {
        "Item Name": "Bloodhawk Eggs",
        "Cost (Normal)": "4 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "6 sp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Bacon Stuffed Bread",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Noble"
      },
      {
        "Item Name": "Frittata & Herbs",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Bacon & Owlbear Eggs",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Boar Ham Steak & Eggs",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Truffle Omelet",
        "Cost (Normal)": "3 gp",
        "Cost (Cheap)": "2 gp",
        "Cost (Expensive)": "5 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Typical Lunch Options]"
      },
      {
        "Item Name": "Commoner"
      },
      {
        "Item Name": "Stockpot Stew/ Soup",
        "Cost (Normal)": "4 cp",
        "Cost (Cheap)": "3 cp",
        "Cost (Expensive)": "6 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "“Adventurer’s” Steak",
        "Cost (Normal)": "4 cp",
        "Cost (Cheap)": "3 cp",
        "Cost (Expensive)": "6 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Minced Pork",
        "Cost (Normal)": "5 cp",
        "Cost (Cheap)": "3 cp",
        "Cost (Expensive)": "8 cp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Roast Goat & Cheese",
        "Cost (Normal)": "6 cp",
        "Cost (Cheap)": "4 cp",
        "Cost (Expensive)": "9 cp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Merchant"
      },
      {
        "Item Name": "Roast Lamb & Cheese",
        "Cost (Normal)": "4 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "6 sp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Boar Tenderloin",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Baked Goose Breast",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Grilled Salmon",
        "Cost (Normal)": "6 sp",
        "Cost (Cheap)": "4 sp",
        "Cost (Expensive)": "9 sp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Noble"
      },
      {
        "Item Name": "Rack of Lamb",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Shellfish Platter",
        "Cost (Normal)": "3 gp",
        "Cost (Cheap)": "2 gp",
        "Cost (Expensive)": "5 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Dragon Turtle Soup",
        "Cost (Normal)": "4 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "6 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Roc Meat Portion",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Typical Dinner Options]"
      },
      {
        "Item Name": "Commoner"
      },
      {
        "Item Name": "Stockpot Stew/ Soup",
        "Cost (Normal)": "4 cp",
        "Cost (Cheap)": "3 cp",
        "Cost (Expensive)": "6 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Grave of Small Birds",
        "Cost (Normal)": "5 cp",
        "Cost (Cheap)": "3 cp",
        "Cost (Expensive)": "8 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "‘Tasha’s Hideous’ Stew",
        "Cost (Normal)": "5 cp",
        "Cost (Cheap)": "3 cp",
        "Cost (Expensive)": "8 cp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Rabbit & Potato Plate",
        "Cost (Normal)": "6 cp",
        "Cost (Cheap)": "4 cp",
        "Cost (Expensive)": "9 cp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Merchant"
      },
      {
        "Item Name": "Hunter’s Pie",
        "Cost (Normal)": "4 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "6 sp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Bloodhawk Breast",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Crocodile Steak",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Roasted Bullywug Legs",
        "Cost (Normal)": "6 sp",
        "Cost (Cheap)": "4 sp",
        "Cost (Expensive)": "9 sp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Noble"
      },
      {
        "Item Name": "Buffalo Ribeye",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp"
      },
      {
        "Item Name": "Sahuagin Caviar",
        "Cost (Normal)": "3 gp",
        "Cost (Cheap)": "2 gp",
        "Cost (Expensive)": "5 gp"
      },
      {
        "Item Name": "Owlbear Steak & Eggs",
        "Cost (Normal)": "4 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "6 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[color] Dragon Steak",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Room Prices, Inns/ Taverns]"
      },
      {
        "Item Name": "Commoner (Poor 2 sp)",
        "Cost (Normal)": "5 cp",
        "Cost (Cheap)": "3 cp",
        "Cost (Expensive)": "8 cp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Modest (1 gp)",
        "Cost (Normal)": "1 sp",
        "Cost (Cheap)": "7 cp",
        "Cost (Expensive)": "2 sp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Merchant (Comfortable 2 gp)",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Wealthy (4 gp)",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Noble (Aristocratic 10 gp+)",
        "Cost (Normal)": "4 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "6 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      }
    ]},
    {name: "MarketProduceFoods", items :[
      {
        "Item Name": "[Vendor/ Stand Items}"
      },
      {
        "Item Name": "Non-Alcoholic Drinks – Cup"
      },
      {
        "Item Name": "Coffee",
        "Value (Normal)": "5 cp",
        "Value (Low)": "3 cp",
        "Value (High)": "8 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Goodberry “Wine”",
        "Value (Normal)": "1 sp",
        "Value (Low)": "7 cp",
        "Value (High)": "2 sp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Fruit Juice (Varies)",
        "Value (Normal)": "5 cp",
        "Value (Low)": "3 cp",
        "Value (High)": "8 cp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Milk (Local Variety)",
        "Value (Normal)": "3 cp",
        "Value (Low)": "2 cp",
        "Value (High)": "5 cp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Fruits – A Piece"
      },
      {
        "Item Name": "In Season",
        "Value (Normal)": "1 cp",
        "Value (Low)": "1 cp",
        "Value (High)": "2 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Out of Season",
        "Value (Normal)": "5 cp",
        "Value (Low)": "3 cp",
        "Value (High)": "8 cp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Vegetables – Each/ Bushel"
      },
      {
        "Item Name": "Amaranth Leaf/ Greens",
        "Value (Normal)": "5 cp",
        "Value (Low)": "3 cp",
        "Value (High)": "8 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Broccoli/ Cauliflower",
        "Value (Normal)": "3 cp",
        "Value (Low)": "2 cp",
        "Value (High)": "5 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Cabbage/ Lettuce",
        "Value (Normal)": "2 cp",
        "Value (Low)": "1 cp",
        "Value (High)": "3 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Fruit “Vegetable”",
        "Value (Normal)": "5 cp",
        "Value (Low)": "3 cp",
        "Value (High)": "8 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Legumes",
        "Value (Normal)": "4 cp",
        "Value (Low)": "3 cp",
        "Value (High)": "6 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Root Vegetable/ Tuber",
        "Value (Normal)": "1 cp",
        "Value (Low)": "1 cp",
        "Value (High)": "2 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Grains – Per lb./ Flour – ½ lb."
      },
      {
        "Item Name": "Amaranth",
        "Value (Normal)": "2 gp",
        "Value (Low)": "1 gp",
        "Value (High)": "3 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Barley/ Rye",
        "Value (Normal)": "2 cp",
        "Value (Low)": "1 cp",
        "Value (High)": "3 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Oats",
        "Value (Normal)": "5 sp",
        "Value (Low)": "3 sp",
        "Value (High)": "8 sp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Quinoa",
        "Value (Normal)": "1 gp",
        "Value (Low)": "7 sp",
        "Value (High)": "2 gp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Rice",
        "Value (Normal)": "5 cp",
        "Value (Low)": "3 cp",
        "Value (High)": "8 cp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Wheat",
        "Value (Normal)": "1 sp",
        "Value (Low)": "7 cp",
        "Value (High)": "2 sp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Baked Goods – Per Item"
      },
      {
        "Item Name": "Almond/ Sweet Roll (S)",
        "Value (Normal)": "1 sp",
        "Value (Low)": "7 cp",
        "Value (High)": "2 sp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Seedcake",
        "Value (Normal)": "5 cp",
        "Value (Low)": "3 cp",
        "Value (High)": "8 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Cheat/ Wheaten Loaf",
        "Value (Normal)": "2 sp",
        "Value (Low)": "1 sp",
        "Value (High)": "3 sp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Cheese Danish",
        "Value (Normal)": "1 sp",
        "Value (Low)": "7 cp",
        "Value (High)": "2 sp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Fruit Tart (S)",
        "Value (Normal)": "2 sp",
        "Value (Low)": "1 sp",
        "Value (High)": "3 sp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Manchet Loaf",
        "Value (Normal)": "1 gp",
        "Value (Low)": "7 sp",
        "Value (High)": "2 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Quince Bread Slice (S)",
        "Value (Normal)": "2 sp",
        "Value (Low)": "1 sp",
        "Value (High)": "3 sp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Rye Loaf",
        "Value (Normal)": "2 cp",
        "Value (Low)": "1 cp",
        "Value (High)": "3 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Protein – Per lb."
      },
      {
        "Item Name": "Beef/ Buffalo/ Deer",
        "Value (Normal)": "3 sp",
        "Value (Low)": "2 sp",
        "Value (High)": "5 sp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Boar/ Chicken/ Pork",
        "Value (Normal)": "8 cp",
        "Value (Low)": "6 cp",
        "Value (High)": "12 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Dried/ Salted Meat",
        "Value (Normal)": "5 sp",
        "Value (Low)": "3 sp",
        "Value (High)": "8 sp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Egg (for 6)",
        "Value (Normal)": "3 cp",
        "Value (Low)": "2 cp",
        "Value (High)": "5 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Fish",
        "Value (Normal)": "6 sp",
        "Value (Low)": "4 sp",
        "Value (High)": "9 sp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Insects/ Small Game",
        "Value (Normal)": "4 cp",
        "Value (Low)": "3 cp",
        "Value (High)": "6 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Goat",
        "Value (Normal)": "1 sp",
        "Value (Low)": "7 cp",
        "Value (High)": "2 sp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Lamb",
        "Value (Normal)": "1 gp",
        "Value (Low)": "7 sp",
        "Value (High)": "2 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Shellfish (Oceanic)",
        "Value (Normal)": "2 gp",
        "Value (Low)": "1 gp",
        "Value (High)": "3 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Cheeses – Per ½ lb."
      },
      {
        "Item Name": "Brie",
        "Value (Normal)": "2 sp",
        "Value (Low)": "1 sp",
        "Value (High)": "3 sp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Cheddar",
        "Value (Normal)": "1 gp",
        "Value (Low)": "7 sp",
        "Value (High)": "2 gp",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Cottage",
        "Value (Normal)": "4 cp",
        "Value (Low)": "3 cp",
        "Value (High)": "6 cp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Parmesan",
        "Value (Normal)": "5 sp",
        "Value (Low)": "3 sp",
        "Value (High)": "8 sp",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Specialty",
        "Value (Normal)": "2 gp",
        "Value (Low)": "1 gp",
        "Value (High)": "3 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Spices – Per ½ Ounce Ground"
      },
      {
        "Item Name": "Cinnamon",
        "Value (Normal)": "1 sp",
        "Value (Low)": "7 cp",
        "Value (High)": "2 sp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Coriander",
        "Value (Normal)": "3 cp",
        "Value (Low)": "2 cp",
        "Value (High)": "5 cp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Cumin",
        "Value (Normal)": "7 cp",
        "Value (Low)": "4 cp",
        "Value (High)": "13 cp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Garlic",
        "Value (Normal)": "2 cp",
        "Value (Low)": "1 cp",
        "Value (High)": "3 cp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Mustard",
        "Value (Normal)": "1 sp",
        "Value (Low)": "7 cp",
        "Value (High)": "2 sp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Nutmeg",
        "Value (Normal)": "8 cp",
        "Value (Low)": "6 cp",
        "Value (High)": "12 cp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Pepper",
        "Value (Normal)": "5 cp",
        "Value (Low)": "3 cp",
        "Value (High)": "8 cp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Salt",
        "Value (Normal)": "6 cp",
        "Value (Low)": "4 cp",
        "Value (High)": "9 cp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Specialty",
        "Value (Normal)": "2 sp",
        "Value (Low)": "1 sp",
        "Value (High)": "3 sp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      }
    ]},
    {name: "CreaturePartsValues", items :[
      {
        "Item Name": "[Selling Value (Creature XP %)]"
      },
      {
        "Item Name": "CR: 0 – 6",
        "Value (Normal)": 0.01,
        "Value (Low)": 0.01,
        "Value (High)": "1.5%"
      },
      {
        "Item Name": "CR: 7 – 12",
        "Value (Normal)": 0.05,
        "Value (Low)": 0.03,
        "Value (High)": 0.08
      },
      {
        "Item Name": "CR: 13 – 18",
        "Value (Normal)": 0.1,
        "Value (Low)": 0.07,
        "Value (High)": 0.15
      },
      {
        "Item Name": "CR: 19 – 24",
        "Value (Normal)": 0.25,
        "Value (Low)": 0.18,
        "Value (High)": 0.38
      },
      {
        "Item Name": "CR: 25+",
        "Value (Normal)": 0.5,
        "Value (Low)": 0.38,
        "Value (High)": 0.75
      }
    ]},
    {name: "HighEndClothing", items :[
      {
        "Item Name": "[Custom Clothing Items]"
      },
      {
        "Item Name": "Bandolier",
        "Cost (Normal)": "8 gp",
        "Cost (Cheap)": "6 gp",
        "Cost (Expensive)": "12 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Belt",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "“Better” Backpack",
        "Cost (Normal)": "4 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "6 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Blouse",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Breeches",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Boots",
        "Cost (Normal)": "4 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "6 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Bow Tie",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Cloak/ (Mantle, -1 gp)",
        "Cost (Normal)": "4 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "6 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Coat",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Coin Purse",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Corset",
        "Cost (Normal)": "3 gp",
        "Cost (Cheap)": "2 gp",
        "Cost (Expensive)": "5 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Dress",
        "Cost (Normal)": "7 gp",
        "Cost (Cheap)": "4 gp",
        "Cost (Expensive)": "13 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Dress Pants",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Dress Shirt",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Dress Shoes",
        "Cost (Normal)": "3 gp",
        "Cost (Cheap)": "2 gp",
        "Cost (Expensive)": "5 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Ghillies (Dance Shoes)",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Gloves",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Hat",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Jacket",
        "Cost (Normal)": "4 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "6 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Jerkin/ (Tabard, +1 gp)",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Pouch",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Robe",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Sandals",
        "Cost (Normal)": "3 gp",
        "Cost (Cheap)": "2 gp",
        "Cost (Expensive)": "5 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Scarf",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Skirt/ (Kilt +1 gp)",
        "Cost (Normal)": "3 gp",
        "Cost (Cheap)": "2 gp",
        "Cost (Expensive)": "5 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Swimwear",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Tie",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Tunic",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Undergarments",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Vests",
        "Cost (Normal)": "3 gp",
        "Cost (Cheap)": "2 gp",
        "Cost (Expensive)": "5 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Extras]"
      },
      {
        "Item Name": "Closure Devices (Options)"
      },
      {
        "Item Name": "Buckles",
        "Cost (Normal)": "1 sp",
        "Cost (Cheap)": "7 cp",
        "Cost (Expensive)": "2 sp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Snaps",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Embroidery (per foot)",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Linen Cloth Construction",
        "Cost (Normal)": "#ERROR!",
        "Cost (Cheap)": "#ERROR!",
        "Cost (Expensive)": "#ERROR!",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Lining (Material Options)"
      },
      {
        "Item Name": "Fur",
        "Cost (Normal)": "3 gp",
        "Cost (Cheap)": "2 gp",
        "Cost (Expensive)": "5 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Leather (Basic)",
        "Cost (Normal)": "4 gp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "6 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Leather (Specialty)",
        "Cost (Normal)": "#ERROR!",
        "Cost (Cheap)": "#ERROR!",
        "Cost (Expensive)": "#ERROR!",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Silk",
        "Cost (Normal)": "3 gp",
        "Cost (Cheap)": "2 gp",
        "Cost (Expensive)": "5 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Misc. (At vendor’s Discretion)"
      },
      {
        "Item Name": "Pockets (flaps +2 sp/ pocket)",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      }
    ]},
    {name: "SpecialMaterialsLeatherArmor", items :[
      {
        "Item Name": "[Custom Armor Parts]"
      },
      {
        "Item Name": "Bracers",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Breastplate",
        "Cost (Normal)": "3 gp",
        "Cost (Cheap)": "2 gp",
        "Cost (Expensive)": "5 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Boots",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "6 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Cloak/ (Mantle, -1 gp)",
        "Cost (Normal)": "6 gp",
        "Cost (Cheap)": "4 gp",
        "Cost (Expensive)": "9 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Cuisse (Thigh Armor)",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Full Arm Armor (Pair)",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Full Leg Armor (Pair)",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Gauntlets",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Gloves",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Gorget (Neck)",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Greaves (Lower Leg)",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Harness (Chest & Back), Extra",
        "Cost (Normal)": "7 gp",
        "Cost (Cheap)": "4 gp",
        "Cost (Expensive)": "13 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Helmet",
        "Cost (Normal)": "2 gp",
        "Cost (Cheap)": "1 gp",
        "Cost (Expensive)": "3 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Pauldrons (Shoulders)",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Sabatons (Feet)",
        "Cost (Normal)": "5 sp",
        "Cost (Cheap)": "3 sp",
        "Cost (Expensive)": "8 sp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Custom Accessories]",
        "Limited Stock": "X"
      },
      {
        "Item Name": "Buckler (1 Unit)",
        "Cost (Normal)": "8 gp",
        "Cost (Cheap)": "6 gp",
        "Cost (Expensive)": "12 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Quiver (1 Unit)",
        "Cost (Normal)": "1 gp",
        "Cost (Cheap)": "7 sp",
        "Cost (Expensive)": "2 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Sheathe (See Unit Note)",
        "Cost (Normal)": "8 sp",
        "Cost (Cheap)": "6 sp",
        "Cost (Expensive)": "12 sp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      }
    ]},
    {name: "SpecialCraftingMaterials", items :[
      {
        "Item Name": "[Name] (Per unit Price)"
      },
      {
        "Item Name": "Adamantite",
        "Cost (Normal)": "200 gp",
        "Cost (Cheap)": "100 gp",
        "Cost (Expensive)": "300 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Aerocrystal",
        "Cost (Normal)": "400 gp",
        "Cost (Cheap)": "300 gp",
        "Cost (Expensive)": "600 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Asmoroch Wood",
        "Cost (Normal)": "400 gp",
        "Cost (Cheap)": "300 gp",
        "Cost (Expensive)": "600 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Beast Feathers (CR Values)",
        "Cost (Normal)": "CR% N.",
        "Cost (Cheap)": "CR% L.",
        "Cost (Expensive)": "CR% H.",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Bone (CR Values)",
        "Cost (Normal)": "CR% N.",
        "Cost (Cheap)": "CR% L.",
        "Cost (Expensive)": "CR% H.",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Chitin (CR Values)",
        "Cost (Normal)": "CR% N.",
        "Cost (Cheap)": "CR% L.",
        "Cost (Expensive)": "CR% H.",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Cold Iron",
        "Cost (Normal)": "100 gp",
        "Cost (Cheap)": "60 gp",
        "Cost (Expensive)": "200 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Coral",
        "Cost (Normal)": "100 gp",
        "Cost (Cheap)": "60 gp",
        "Cost (Expensive)": "200 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Creature Hide (CR Values)",
        "Cost (Normal)": "CR% N.",
        "Cost (Cheap)": "CR% L.",
        "Cost (Expensive)": "CR% H.",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Creature Scales (CR Values)",
        "Cost (Normal)": "CR% N.",
        "Cost (Cheap)": "CR% L.",
        "Cost (Expensive)": "CR% H.",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Darksteel",
        "Cost (Normal)": "200 gp",
        "Cost (Cheap)": "100 gp",
        "Cost (Expensive)": "300 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Darkwood",
        "Cost (Normal)": "100 gp",
        "Cost (Cheap)": "60 gp",
        "Cost (Expensive)": "300 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Dwarvenstone",
        "Cost (Normal)": "400 gp",
        "Cost (Cheap)": "300 gp",
        "Cost (Expensive)": "600 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Eternal Ice",
        "Cost (Normal)": "400 gp",
        "Cost (Cheap)": "300 gp",
        "Cost (Expensive)": "600 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Ignum",
        "Cost (Normal)": "400 gp",
        "Cost (Cheap)": "300 gp",
        "Cost (Expensive)": "600 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Infernal Leather",
        "Cost (Normal)": "800 gp",
        "Cost (Cheap)": "600 gp",
        "Cost (Expensive)": "1200 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Infernal Steel",
        "Cost (Normal)": "800 gp",
        "Cost (Cheap)": "600 gp",
        "Cost (Expensive)": "1200 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Leafweave",
        "Cost (Normal)": "100 gp",
        "Cost (Cheap)": "60 gp",
        "Cost (Expensive)": "200 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Mithril",
        "Cost (Normal)": "200 gp",
        "Cost (Cheap)": "100 gp",
        "Cost (Expensive)": "300 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Obsidian",
        "Cost (Normal)": "200 gp",
        "Cost (Cheap)": "100 gp",
        "Cost (Expensive)": "300 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Orichalum",
        "Cost (Normal)": "400 gp",
        "Cost (Cheap)": "300 gp",
        "Cost (Expensive)": "600 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Plague Wood",
        "Cost (Normal)": "200 gp",
        "Cost (Cheap)": "100 gp",
        "Cost (Expensive)": "300 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Shadowsilk (CR Values)",
        "Cost (Normal)": "CR% N.",
        "Cost (Cheap)": "CR% L.",
        "Cost (Expensive)": "CR% H.",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Shadowfell Linen",
        "Cost (Normal)": "800 gp",
        "Cost (Cheap)": "600 gp",
        "Cost (Expensive)": "1200 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Spiritual Wood",
        "Cost (Normal)": "200 gp",
        "Cost (Cheap)": "100 gp",
        "Cost (Expensive)": "300 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Stellar Iron",
        "Cost (Normal)": "800 gp",
        "Cost (Cheap)": "600 gp",
        "Cost (Expensive)": "1200 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      }
    ]},
    {name: "TattooShop", items :[
      {
        "Item Name": "[Specialty Inks, Price per Size]"
      },
      {
        "Item Name": "Beastial Ink"
      },
      {
        "Item Name": "Small",
        "Cost (Normal)": "125 gp",
        "Cost (Cheap)": "163 gp",
        "Cost (Expensive)": "190 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Medium",
        "Cost (Normal)": "250 gp",
        "Cost (Cheap)": "175 gp",
        "Cost (Expensive)": "375 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Large",
        "Cost (Normal)": "500 gp",
        "Cost (Cheap)": "375 gp",
        "Cost (Expensive)": "750 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Detection Ink (Colors Vary)"
      },
      {
        "Item Name": "Small",
        "Cost (Normal)": "1,000 gp",
        "Cost (Cheap)": "700 gp",
        "Cost (Expensive)": "1,500 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Medium",
        "Cost (Normal)": "2,000 gp",
        "Cost (Cheap)": "1,400 gp",
        "Cost (Expensive)": "3,000 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Large",
        "Cost (Normal)": "4,000 gp",
        "Cost (Cheap)": "2,800 gp",
        "Cost (Expensive)": "6,000 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Elemental Ink (Choice Varies)"
      },
      {
        "Item Name": "Small",
        "Cost (Normal)": "150 gp",
        "Cost (Cheap)": "105 gp",
        "Cost (Expensive)": "225 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Medium",
        "Cost (Normal)": "300 gp",
        "Cost (Cheap)": "210 gp",
        "Cost (Expensive)": "450 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Large",
        "Cost (Normal)": "600 gp",
        "Cost (Cheap)": "420 gp",
        "Cost (Expensive)": "900 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Glamor Ink (Choice Varies)"
      },
      {
        "Item Name": "Small",
        "Cost (Normal)": "100 gp",
        "Cost (Cheap)": "70 gp",
        "Cost (Expensive)": "150 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Medium",
        "Cost (Normal)": "200 gp",
        "Cost (Cheap)": "140 gp",
        "Cost (Expensive)": "300 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Large",
        "Cost (Normal)": "400 gp",
        "Cost (Cheap)": "2800 gp",
        "Cost (Expensive)": "600 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Glow Ink (Choice Varies)"
      },
      {
        "Item Name": "Small",
        "Cost (Normal)": "100 gp",
        "Cost (Cheap)": "70 gp",
        "Cost (Expensive)": "150 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Medium",
        "Cost (Normal)": "200 gp",
        "Cost (Cheap)": "140 gp",
        "Cost (Expensive)": "300 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Large",
        "Cost (Normal)": "400 gp",
        "Cost (Cheap)": "280 gp",
        "Cost (Expensive)": "600 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Metallic-Ink (Basic Metals)"
      },
      {
        "Item Name": "Small",
        "Cost (Normal)": "150 gp",
        "Cost (Cheap)": "105 gp",
        "Cost (Expensive)": "225 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Medium",
        "Cost (Normal)": "300 gp",
        "Cost (Cheap)": "210 gp",
        "Cost (Expensive)": "450 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Large",
        "Cost (Normal)": "600 gp",
        "Cost (Cheap)": "420 gp",
        "Cost (Expensive)": "900 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Mood Ink (Single Color)"
      },
      {
        "Item Name": "Small",
        "Cost (Normal)": "100 gp",
        "Cost (Cheap)": "70 gp",
        "Cost (Expensive)": "150 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Medium",
        "Cost (Normal)": "200 gp",
        "Cost (Cheap)": "140 gp",
        "Cost (Expensive)": "300 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Large",
        "Cost (Normal)": "400 gp",
        "Cost (Cheap)": "280 gp",
        "Cost (Expensive)": "600 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Prismatic Ink (Single Color)"
      },
      {
        "Item Name": "Small",
        "Cost (Normal)": "150 gp",
        "Cost (Cheap)": "105 gp",
        "Cost (Expensive)": "225 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Medium",
        "Cost (Normal)": "300 gp",
        "Cost (Cheap)": "210 gp",
        "Cost (Expensive)": "450 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Large",
        "Cost (Normal)": "600 gp",
        "Cost (Cheap)": "420 gp",
        "Cost (Expensive)": "900 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Shifting Ink (GM Choice)"
      },
      {
        "Item Name": "Small",
        "Cost (Normal)": "5,000 gp",
        "Cost (Cheap)": "3,500 gp",
        "Cost (Expensive)": "7,500 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Medium",
        "Cost (Normal)": "10,000 gp",
        "Cost (Cheap)": "7,000 gp",
        "Cost (Expensive)": "15,000 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Large",
        "Cost (Normal)": "20,000 gp",
        "Cost (Cheap)": "14,000 gp",
        "Cost (Expensive)": "30,000 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Temporary Ink (Black Only)"
      },
      {
        "Item Name": "Small",
        "Cost (Normal)": "50 gp",
        "Cost (Cheap)": "35 gp",
        "Cost (Expensive)": "75 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Medium",
        "Cost (Normal)": "100 GP",
        "Cost (Cheap)": "70 GP",
        "Cost (Expensive)": "150 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Large",
        "Cost (Normal)": "200 gp",
        "Cost (Cheap)": "140 gp",
        "Cost (Expensive)": "300 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "3-D Ink (Colors Vary)"
      },
      {
        "Item Name": "Small",
        "Cost (Normal)": "350 gp",
        "Cost (Cheap)": "245 gp",
        "Cost (Expensive)": "525 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Medium",
        "Cost (Normal)": "700 gp",
        "Cost (Cheap)": "490 gp",
        "Cost (Expensive)": "1,050 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Large",
        "Cost (Normal)": "1,400 gp",
        "Cost (Cheap)": "980 gp",
        "Cost (Expensive)": "2,100 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[1 oz Bottles of Basic Colors]"
      },
      {
        "Item Name": "Any Color",
        "Cost (Normal)": "15 gp",
        "Cost (Cheap)": "10 gp",
        "Cost (Expensive)": "23 gp",
        "Limited Stock": "X",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Miscellaneous]"
      },
      {
        "Item Name": "Full Ink Set",
        "Cost (Normal)": "200 gp",
        "Cost (Cheap)": "140 gp",
        "Cost (Expensive)": "300 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Needle Set",
        "Cost (Normal)": "5 gp",
        "Cost (Cheap)": "3 gp",
        "Cost (Expensive)": "8 gp",
        "Limited Stock": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Medical Supplies",
        "Cost (Normal)": "30 gp",
        "Cost (Cheap)": "22 gp",
        "Cost (Expensive)": "45 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "Sketchbook",
        "Cost (Normal)": "25 gp",
        "Cost (Cheap)": "18 gp",
        "Cost (Expensive)": "38 gp",
        "Rural Locale": "X",
        "Urban Locale": "X",
        "Premium Locale": "X"
      },
      {
        "Item Name": "[Tools]"
      },
      {
        "Item Name": "Artisans Tools"
      },
      {
        "Item Name": "Tattooist’s Tools",
        "Cost (Normal)": "70 gp",
        "Cost (Cheap)": "49 gp",
        "Cost (Expensive)": "105 gp",
        "Limited Stock": "X",
        "Premium Locale": "X"
      }
    ]},
    {name: "FishingShop", items: [
      {
        "Item Name": "[Weapons]"
      },
      {
        "Item Name": "Simple Melee Weapons"
      },
      {
        "Item Name": "Spear",
        "__EMPTY": "1 gp",
        "__EMPTY_1": "7 sp",
        "__EMPTY_2": "2 gp",
        "__EMPTY_4": "X",
        "__EMPTY_5": "X",
        "__EMPTY_6": "X"
      },
      {
        "Item Name": "Martial Ranged Weapons"
      },
      {
        "Item Name": "Net",
        "__EMPTY": "1 gp",
        "__EMPTY_1": "7 sp",
        "__EMPTY_2": "2 gp",
        "__EMPTY_3": "X",
        "__EMPTY_4": "X",
        "__EMPTY_5": "X",
        "__EMPTY_6": "X"
      },
      {
        "Item Name": "[Adventuring Gear]"
      },
      {
        "Item Name": "Fishing Tackle",
        "__EMPTY": "1 gp",
        "__EMPTY_1": "7 sp",
        "__EMPTY_2": "2 gp",
        "__EMPTY_3": "X",
        "__EMPTY_4": "X",
        "__EMPTY_5": "X",
        "__EMPTY_6": "X"
      },
      {
        "Item Name": "[Waterborne Vehicles]"
      },
      {
        "Item Name": "Rowboat",
        "__EMPTY": "50 gp",
        "__EMPTY_1": "38 gp",
        "__EMPTY_2": "75 gp",
        "__EMPTY_4": "X",
        "__EMPTY_5": "X",
        "__EMPTY_6": "X"
      },
      {
        "Item Name": "[Trade Goods]"
      },
      {
        "Item Name": "1 lb. of Fishing Bait",
        "__EMPTY": "5 cp",
        "__EMPTY_1": "3 cp",
        "__EMPTY_2": "8 cp",
        "__EMPTY_3": "X",
        "__EMPTY_4": "X",
        "__EMPTY_5": "X",
        "__EMPTY_6": "X"
      }
    ]}
  ]
  
    
const bingus = (value, shopType) => {
  writeFile('./shops/'+shopType+'.js', 'export const ' + shopType + ' = ' + value , err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
}


const content = (shopType) => {
  console.log("____________________________________________________")
  let mutarray = [];
  let currCategory = {};
  let currSubCategory = null;
  shopType.items.forEach((element) => {
    if(Object.keys(element).length === 1 ){
      const firstKey = Object.keys(element)[0];
      if(element[firstKey].startsWith("[")) {
        console.log(element['Item Name'])
        mutarray.push({CategoryName: element['Item Name'], items: []})
        currCategory = mutarray.length-1
        currSubCategory = null
      } else {
        console.log(element['Item Name'])
        mutarray[currCategory].items.push({CategoryName: element['Item Name'], items: []})
        currSubCategory = mutarray[currCategory].items.length-1
      }
    } else {
      if(currSubCategory !== null) {
        console.log(element['Item Name'])
        mutarray[currCategory].items[currSubCategory].items.push(element);
      } else {
        console.log(element['Item Name'])
        mutarray[currCategory].items.push(element);
      }
    }
  });
  console.log(mutarray)
  console.log(shopType.name)
  console.log("____________________________________________________")
  bingus(JSON.stringify(mutarray), shopType.name);
}

shops.forEach(shop => {
  content(shop)
})

