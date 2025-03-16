/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // Generate a map of courses and their prerequisites
    const courseMap = new Map();
    for (let i = 0; i < numCourses; i++) {
        courseMap.set(i, new Node(i));
    }

    // Fill the map with the prerequisites
    for (const [cur, pre] of prerequisites) {
        const curNode = courseMap.get(cur);
        const preNode = courseMap.get(pre);

        preNode.next.push(cur);
        curNode.prereqCount++;
    }

    // Create a queue of courses with no prerequisites
    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (courseMap.get(i).prereqCount === 0) queue.push(i);
    }

    // Process the courses in the queue
    const order = [];
    while (queue.length > 0) {
        const course = queue.shift();
        order.push(course);

        // Decrement the prereq count of the courses that depend on the current course
        for (const next of courseMap.get(course).next) {
            courseMap.get(next).prereqCount--;

            // If the course has no prerequisites, add it to the queue
            if (courseMap.get(next).prereqCount === 0) {
                queue.push(next);
            }
        }
    }

    return order.length === numCourses ? order : [];
};

class Node {
    constructor(num) {
        this.num = num;
        this.prereqCount = 0;
        this.next = [];
    }
}