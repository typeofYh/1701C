//检索并计算属于同一教室中每个学生的平均分数，例子中教室 ID 为 75。每个学生可以在一年内参加一门或多门课程。以下 API 可用于检索所需数据。

// GET LIST OF ALL STUDENTS
//GET /api/students
// Response:
// [{
//     "id": 1,
//     "name": "John",
//     "classroomId": 75
// }]
// 获取每一个学生的课程
//GET /api/courses?filter=studentId&eq=1
// Response:
// [{
//     "id": "history",
//     "studentId": 1
// }, {
//     "id": "algebra",
//     "studentId": 1
// },{
//     "id": "history",
//     "studentId": 3
// }, {
//     "id": "algebra",
//     "studentId": 3
// },
//, {
//     "id": "lange",
//     "studentId": 3
// }]
// 每一个课程的评价
// GET /api/evaluation/history?filter=studentId eq 1
// Response:
// {
//     "id": 200,
//     "score": 50,
//     "totalScore": 100
// }
//编写一个接受教室 ID 的函数，并根据该函数计算该教室中每个学生的平均值。 该函数的最终输出应该是带有平均分数的学生列表：

// [
//   { "id": 1, "name": "John", "average": 70.5 },
//   { "id": 3, "name": "Lois", "average": 67 },
// }
// 使用普通回调，promises，observables，generator 或 async-wait 编写所需的函数。 尝试使用至少 3 种不同的技术解决这个问题。 代码素材用于代替接口

const APIS = {
  STUDENTS: '/api/students',
  COURSES: '/api/courses',
  EVALUATION: '/api/evaluation/algebra' 
}; 
function fetchData(api) {
  return new Promise(resolve => {
    let data = null;
    switch (api) {
      case APIS.STUDENTS:
        data = [{
          id: 1,
          name: 'John',
          classroomId: 75
        }, {
          id: 1,
          name: 'Lois',
          classroomId: 75
        }];
        break;
      case APIS.COURSES:
        data = [{
          id: 'history',
          studentId: 1
        }, {
          id: 'algebra',
          studentId: 1
        }];
        break;
      case APIS.EVALUATION:
        data = {
          id: '200',
          score: 50,
          totalScore: 100
        };
        break;
    } 
    resolve(data);
  });
} 

// fetchData('/api/students').then(res=>{
//     console.log(res);
// })
async function count(classroomId){
    let students = await fetchData('/api/students');
    let studentId = students.find(item=>item.classroomId===classroomId).id;
    let courses = await fetchData('/api/courses');
    let coursesLength = courses.filter(item=>item.studentId===studentId).length;
    let evaluation = await fetchData('/api/evaluation/algebra')
    return students.map(item=>({
      id:studentId,
      name:item.name,
      average:(evaluation.totalScore/coursesLength).toFixed(2)
    }))
}

count(75).then(res=>{
  console.log(res);
})
