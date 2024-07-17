import { sites } from '$lib/sites.js';
import _ from 'lodash';

export function filter(tags) {
  let filtered_sites = []

  sites.map(site => {
    site.possible = true
    site.category_possible = true
    site.category_assigned = false

    tags.map(tag => {
      if (!_.includes(site.tags, tag)) { // If the base site doesn't include the tag, set possible to false
        site.possible = false

        if (site.categories.list) { // Then, try looking through the categories on that site
          let category_index = _.indexOf(site.categories.tags, tag)

          if (category_index !== -1) { // indexOf will return -1 if not found
            if (!site.category_assigned) {
              site.category_assigned = true

              site.selected_category = {
                name: `${site.name} - ${tag}`,
                url: `${site.url}${site.categories.pattern}${site.categories.list[category_index]}`,
                image: site.image,
                tags: [...site.tags, tag],
                category: true,
              }
            } 
          } else {
            site.category_possible = false
          }
        }
      }
      if (site.selected_category && !site.selected_category.tags.includes(tag)) {
        site.category_possible = false
        site.selected_category = null
      }
    })

    if (site.possible) {
      filtered_sites.push(site)
    } else if (site.category_possible && site.selected_category) {
      filtered_sites.push(site.selected_category)
    }
  })

  filtered_sites = [..._.filter(filtered_sites, {possible: true}), ..._.filter(filtered_sites, {category: true})] // Put non-category sites first

  return filtered_sites;
}