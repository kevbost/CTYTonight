import * as types from '../../../modules/api/actionTypes'

export const _staticApiResponse = {
  data: [
    {
      '_id': 'coolId',
      'groupBy': 'sort',
      'dayOfWeek': 'Day',
      'sortOrder': 1,
      'title': 'title',
      'description': 'some rediculous description',
      'url': 'ur5',
      'time': '20:00:00',
      'date': '2018-03-05',
      'datetime': '2018-03-05T20:00:00-0500',
      'venue': {
        'name': 'name',
        'url': 'url',
        'latitude': 1,
        'longitude': 1,
        'country': 'United States',
        'city': 'Greenville',
        'state': 'SC',
        'street': '25 Draper St',
        'zip': '29611'
      },
      'updated': '2018-03-01T12:00:03.144Z'
    }
  ]
}

export const _expectedActions = [
  {
    type: types.SET_RESPONSE_LOADING,
    data: true
  },
  {
    type: types.SET_RESPONSE,
    cty: 'gvl',
    timespan: 'thisweek',
    data: _staticApiResponse
  },
  {
    type: types.SET_RESPONSE_LOADING,
    data: false
  }
]