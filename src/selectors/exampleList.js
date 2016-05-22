import { createSelector } from "reselect"

const getExamples = (state) => state.examples

export default createSelector(
  [ getExamples ],
  ( examples ) => {

      if (examples.loading) {
          return {
              isLoading : true
          }
      }

      let list = []
      for (let i = 0, l = examples.data.length; i < l; i++){
          list.push({
              ...examples.data[i],
              author : "John Doe"
              // Instead of setting author like that we could match an example author id and an author from another part of the state (for instance state.author)
              // const authorId = examples[i].authorId
              // author : authors[authorId].name
          })
      }

      return {
          data : list
      }
  }
)
