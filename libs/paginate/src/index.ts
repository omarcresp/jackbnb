import { FilterQuery } from "mongoose";

export const paginationPipeline = <T extends Record<string, any>>(
  page = "0",
  resultPerPage = 10,
  filter: FilterQuery<T> = {},
) => {
  const limit = resultPerPage;
  const skip = (Number(page) - 1) * limit;

  return [
    {
      $match: {
        ...filter,
      },
    },
    {
      $sort: {
        createdAt: -1,
      },
    },
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
