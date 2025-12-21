// exports.ApiFeature = class ApiFeature {
//   constructor(dbQuery, requestQuery) {
//     this.dbQuery = dbQuery;
//     this.requestQuery = requestQuery;
//   }

//   paginate(defaultPageNumber = 1, defaultPageSize = 10) {
//     const pageNumber = this.requestQuery.pageNumber * 1 || defaultPageNumber;
//     const pageSize = this.requestQuery.pageSize * 1 || defaultPageSize;
//     const skip = (pageNumber - 1) * pageSize;
//     this.dbQuery = this.dbQuery.skip(skip).limit(pageSize);
//     return this;
//   }

//   project() {
//     if (this.requestQuery.project) {
//       const projectionString =
//         this.requestQuery.project.split(',').join(' ') + '-__v';
//       this.dbQuery.select(projectionString);
//     }
//     return this;
//   }

//   sort() {
//     if (this.requestQuery.sort) {
//       const sortBy = this.requestQuery.sort.split(',').join(' ');
//       this.dbQuery = this.dbQuery.sort(sortBy);
//     }
//     return this;
//   }

//   get dbQuery() {
//     return this.dbQuery;
//   }
// };

exports.ApiFeatures = class ApiFeatures {
  constructor(dbQuery, requestQeury) {
    this.dbQuery = dbQuery;
    this.requestQeury = requestQeury;
  }

  paginate(pageNumber = 1, pageSize = 5) {
    pageNumber = Number(this.requestQeury.pageNumber) || pageNumber;
    pageSize = Number(this.requestQeury.pageSize) || pageSize;
    let skip = 0;
    if (pageNumber !== 1) skip = (pageNumber - 1) * pageSize;
    this.dbQuery.skip(skip).limit(pageSize).sort({ _id: -1 });
    return this;
  }
  sort() {
    if (this.requestQeury.sort) {
      const sortBy = this.requestQeury.sort.split(",").join(" ");
      this.dbQuery.sort(sortBy);
    }
    return this;
  }
  projection() {
    if (this.requestQeury.project) {
      const projectionStr = this.requestQeury.project.split(",").join(" ");
      console.log(projectionStr);
      this.dbQuery.select(projectionStr);
    }
    return this;
  }
};

// Pagination
// pageNumber=1 & pageSize=20 -> skip 0, limit 20
// pageNumber=2 & pageSize=20 -> skip(19), limit 20
// pageNumber=3 & pageSize=20 -> skip(39), limit 20
// pageNumber=4 & pageSize=20 -> skip(59), limit 20
