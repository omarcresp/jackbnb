export const paginationPipeline = <T extends Record<number, any>>(
  page = 0,
  resultPerPage = 10,
) => {
  const limit = resultPerPage;
  const skip = (page - 1) * limit;

  return [
    {
      $facet: {
        total: [
          {
            $count: "count",
          },
        ],
        data: [
          {
            $addFields: {
              _id: "$$REMOVE",
            },
          },
        ],
      },
    },
    {
      $unwind: "$total",
    },
    {
      $project: {
        items: {
          $slice: [
            "$data",
            skip,
            {
              $ifNull: [limit, "$total.count"],
            },
          ],
        },
        page: {
          $literal: skip / limit + 1,
        },
        hasNextPage: {
          $lt: [{ $multiply: [limit, Number(page)] }, "$total.count"],
        },
        totalPages: {
          $ceil: {
            $divide: ["$total.count", limit],
          },
        },
        totalItems: "$total.count",
      },
    },
  ];
};
