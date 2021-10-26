const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = Schema({
  _id: Schema.Types.ObjectId,
  specific_variety_name: String,
  botanical_name: String,
  category: [
    String
  ],
  plant_genus: [String],
  plant_type: [String],
  plant_family: [String],
  other_names: [String],
  subcategory: [String],
  keywords: [
   String
  ],
  tags_from_users: [String]
},
images: [
  {
    _id: Schema.Types.ObjectId,
    image_title: {type:String},
    image_link: {type:String},
    image_size_pixel: {type:String},
    image_file_format: {type:String},
    image_description: [{type:String}],
    image_owner: {type:String},
    photographer-artist-origin: {type:String},
    image_source: {type:String},
    image_source_information: {type:String},
    image_license_given: true,
    image_license_type: {type:String},
    image_licence_information: {type:String},
    image_keywords: [{type:String}],
    image_first_post_date_plantastic: {type:Date},
    image_notes: [{type:String}]
  }
],
plant_data: {
  planting_conditions: {
    sun: [{type:String}],
    soil: {
      soil_characteristics: [{type:String}],
      soil_types: [{type:String}],
      adult_plant_soil_amount: {type:String},
      adult_plant_soil_amount_unit: {type:String},
      requires_mulching: true,
      soil_notes: [{type:String}],
      mulch: {
        mulch_type: [{type:String}],
        mulch_thickness: {type:Number},
        mulch:thickness_unit: {type:String},
        mulch_every: {type:Number},
        mulch_every_unit: {type:String},
        mulch_notes: [{type:String}]
      }
    },
    water: {
      water_needs_average:{type:Number},
      water_reminder_min_temperature_celsius: {type:Number},
      water_reminder_min_temperature_fahrenheit: {type:Number},
      water_reminder_min_days: {type:Number},
      watering_notes: [{type:String}]
    },
    fertilizer: {
      fertilizer_needs_average: {type:Number},
      fertilizer_notes: [{type:String}],
      fertilizer_reminder_min_days: {type:Number},
      fertilizer_chemical_requirements: [{type:String}],
      fertilizer_type: {type:String}
    },
    planting_distance: {
      row_distance_min: {type:Number},
      row_distance_min_unit: {type:String},
      plant_distance_min: {type:Number},
      plant_distance_min_unit: {type:String},
      separate_plants: true,
      separate_plants_space: {type:String},
      separate_plants_space_unit: {type:String},
      separate_notes: [{type:String}]
    },
    seeding_germination: {
      seed_depth: {type:Number},
      seed_depth_unit: {type:String},
      seeding_notes: [{type:String}],
      seeding_time: {
        preculture_start_month_index: {type:Number},
        preculture_end_month_index: {type:Number},
        direct_seeding_start_month_index: {type:Number},
        direct_seeding_end_month_index: {type:Number}
      },
      germination: {
        germination_temperature_min_celsius: {type:Number},
        germination_temperature_max_celsius: {type:Number},
        germination_temperature_min_fahrenheit: {type:Number},
        germination_temperature_max_fahrenheit: {type:Number},
        sprouting_time_estimate_min: {type:Number},
        sprouting_time_estimate_max: {type:Number},
        sprouting_time_estimate_unit: {type:String},
        seed_requires_light: true,
        germination_notes: [{type:String}]
      }
    }
  },
  harvest: {
    preculture_harvest_start_month_index: {type:Number},
    preculture_harvest_end_month_index: {type:Number},
    direct_seed_harvest_start_month_index: {type:Number},
    direct_seed_harvest_ende_month_index: {type:Number},
    ready_for_harvest: {type:String}
  },
  care: {
    care_keypoints: [{type:String}],
    care_information: [{type:String}]
  },
  variety_specific_characteristics_list: [{type:String}],
  variety_specific_characteristics_notes: [{type:String}],
  origin: {type:String},
  hybrid_type: {type:String},
  growth_time_teenager: {type:Number},
  growth_time_unit_teenager: {type:String},
  growth_time_adult: {type:Number},
  growth_time_unit_adult: {type:String},
  growth: {type:String},
  requires_high_nutrition: true,
  lifetime: [{type:String}],
  winter-hardy: false,
  propagation_methods: [{type:String}],
  propagation_notes: [{type:String}],
  plant_height: {type:Number},
  plant_height_unit: {type:String},
  plant_width: {type:Number},
  plant_width_unit: {type:String},
  can_be_houseplant: true,
  plant_has_fruit: true,
  plant_has_seed_pit: true,
  plant_has_flower: true,
  plant_has_leaves: true,
  plant_has_stem: true,
  plant_has_bulb_cloves: false,
  plant_has_root_tuber: true,
  plant_has_medicinal_purpose: false,
  plant_has_poisonous_part: true,
  grafting: true,
  grafting_notes: [{type:String}],
  plant_description: [{type:String}],
  plant_information: [{type:String}],
  plant_description_keywords: [{type:String}],
  other_information: {type:String},
  repotting: {
    plant_needs_repotting_replanting: true,
    repot_after_time: {type:Number},
    repot_after_time_unit: {type:String}
  },
  possible_diseases_and_pests: {
    pests: [{type:String}],
    diseases: [{type:String}],
    mold: [{type:String}],
    notes: [{type:String}]
  },
  poisonousness: {
    degree_of_poisonousness_fruit: {type:Number},
    degree_of_poisonousness_flower: {type:Number},
    degree_of_poisonousness_leaves_bulb:{type:Number},
    degree_of_poisonousness_stem:{type:Number},
    degree_of_poisonousness_roots:{type:Number},
    inedible_and_poisonous_parts: [{type:String}],
    poisonousness_notes: [{type:String}]
  },
  medicinal_purpose_information: {
    common_medical_use: [{type:String}],
    medicinal_plant_part: [{type:String}],
    medication_form: [{type:String}],
    notes: [{type:String}]
  },
  root_tuber: {
    edible_roots: false,
    edible_tubers: false,
    root_depth_average: {type:Number},
    root_depth_average_unit: {type:String},
    root_shape: {type:String},
    tuber_shape: {type:String},
    characteristics: [{type:String}],
    notes: [{type:String}]
  },
  bulb_cloves: {
    bulb_shape: {type:String},
    cloves_shape: {type:String},
    propagation_through_cloves: true,
    notes: [{type:String}]
  },
  stem: {
    edible_stem: false,
    stem-shape: {type:String},
    color: [{type:String}],
    stem_characteristics: [{type:String}],
    notes: [{type:String}]
  },
  foliage_leaves: {
    edible_leaves: false,
    leaf_size: {type:Number},
    leaf_size_unit: {type:String},
    leaf_color: {type:String},
    leaf_shape: {type:String},
    : ,
    notes: [{type:String}]
  },
  flower: {
    flowering_start_month_index: {type:Number},
    flowering_end_month_index: {type:Number},
    beefriendly: false,
    petal_color: [{type:String}],
    self-pollinating: true,
    notes: [{type:String}]
  },
  fruit: {
    edible_fruit: true,
    fruit_start_month_index: {type:Number},
    fruit_end_month_index:{type:Number},
    fruit_color: [{type:String}],
    fruit_non-poisonous: true,
    fruit_edible: true,
    notes: [{type:String}]
  }
},
links: {
  articles: [
    {
      article_title: {type:String},
      article_topic: {type:String},
      aritcle_link: {type:String}
    },
    {
      article_title: {type:String},
      article_topic: {type:String},
      aritcle_link: {type:String}
    }
  ],
  related_shop_products: [
    {
      shop_product_title: {type:String},
      shop_product_note: {type:String},
      shop_product_link: {type:String}
    },
    {
      shop_product_title: {type:String},
      shop_product_note: {type:String},
      shop_product_link: {type:String}
    }
  ],
  recipes: [
    {
      recipe_title: {type:String},
      recipe_topic: {type:String},
      recipe_link: {type:String}
    },
    {
      recipe_title: {type:String},
      recipe_topic: {type:String},
      recipe_link: {type:String}
    }
  ]
},
this_entry: {
  editors: [
    { editor_name: {type:String}, edit_date: {type:Date} }
  ]
},
sources_for_our_information: [
  {
    topic: [{type:String}],
    sources: [
      {
        source_link: {type:String},
        source_title: {type:String},
        source_author: {type:String},
        source_specifics: {type:String},
        source_notes: [{type:String}]
      }
    ]
  }
]
});

const Plant = mongoose.model("plant", plantSchema, "plant");

modules.exports = Plant;
