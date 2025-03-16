/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // Generate arrays of prereq count and next courses
    const prereqArr = Array.from({ length: numCourses }, () => 0);
    const nextArr = Array.from({ length: numCourses }, () => []);

    // Fill the arrays with the prerequisites
    for (const [cur, pre] of prerequisites) {
        prereqArr[cur]++;
        nextArr[pre].push(cur);
    }

    // Create a queue of courses with no prerequisites
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (prereqArr[i] === 0) queue.push(i);
    }

    // Process the courses in the queue
    const order = [];
    while (queue.length > 0) {
        const course = queue.shift();
        order.push(course);

        // Decrement the prereq count of the courses that depend on the current course
        for (const next of nextArr[course]) {
            // If the course has no prerequisites, add it to the queue
            if (--prereqArr[next] === 0) queue.push(next);
        }
    }

    return order.length === numCourses ? order : [];
};