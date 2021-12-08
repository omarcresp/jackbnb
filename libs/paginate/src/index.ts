const paginationPipeline = (page = 1, resultPerPage = 10): unknown[] => {
  const limit = resultPerPage;
  const skip = (page - 1) * limit;

  return [
    {
      $facet: {
        total: [
          {
            $count: 'count',
          },
        ],
        data: [
          {
            $addFields: {
              id: '$_id',
              _id: '$$REMOVE',
            },
          },
        ],
      },
    },
    {
      $unwind: '$total',
    },
    {
      $project: {
        items: {
          $slice: [
            '$data',
            skip,
            {
              $ifNull: [limit, '$total.count'],
            },
          ],
        },
        page: {
          $literal: page,
        },
        hasNextPage: {
          $lt: [limit * page, '$total.count'],
        },
        totalPages: {
          $ceil: {
            $divide: ['$total.count', limit],
          },
        },
        totalItems: '$total.count',
      },
    },
  ];
};

export default paginationPipeline;
