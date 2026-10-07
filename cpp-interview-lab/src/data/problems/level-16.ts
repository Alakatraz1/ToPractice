import { Problem } from '../types';

export const level16Problems: Problem[] = [
    {
        id: 'prob-16-01',
        levelId: 'level-16',
        title: 'Traverse a Linked List',
        type: 'coding',
        difficulty: 'beginner',
        order: 1,
        description: `A Linked List is a series of **Nodes** connected by pointers. They are not stored consecutively in memory like arrays.\n\n\`\`\`cpp\nstruct ListNode {\n    int val;\n    ListNode* next;\n    ListNode(int x) : val(x), next(NULL) {}\n};\n\`\`\`\n\n**Task:**\nYou are given the \`head\` of a Linked List (we handle the creation). Traverse the list and print every value separated by a space.\n\n*Note:* The starter code creates the list for you. You just write the traversal loop.`,
        whyThisMatters: 'Pointer traversal is the foundational skill for linked lists and trees.',
        concepts: ['linked lists', 'pointers', 'traversal'],
        prerequisites: ['structs', 'loops'],
        learningObjectives: ['Use `curr = curr->next` to traverse pointers'],
        constraints: [],
        examples: [{ input: '3\n1 2 3', output: '1 2 3' }],
        testCases: [
            { id: 'tc1', input: '3\n1 2 3', expectedOutput: '1 2 3', hidden: false }
        ],
        starterCode: `#include <iostream>\nusing namespace std;\n\nstruct ListNode {\n    int val;\n    ListNode* next;\n    ListNode(int x) : val(x), next(NULL) {}\n};\n\nint main() {\n    int n; cin >> n;\n    ListNode* head = NULL;\n    ListNode* tail = NULL;\n    for(int i=0; i<n; i++) {\n        int x; cin >> x;\n        ListNode* node = new ListNode(x);\n        if(!head) head = tail = node;\n        else { tail->next = node; tail = node; }\n    }\n    \n    // START YOUR CODE HERE\n    // Traverse starting from 'head' and print 'val'\n    ListNode* curr = head;\n    \n    \n    return 0;\n}`,
        hints: ['Use a `while` loop: `while(curr != NULL)`', 'Print `curr->val`.', 'Move forward using `curr = curr->next`.'],
        howToThink: ['Imagine stepping stones. You start at the `head`. To move to the next stone, you follow the `next` arrow.'],
        approach: 'Loop until pointer is null, advancing by next.',
        pseudocode: 'curr = head\nwhile curr != null:\n    print curr.val\n    curr = curr.next',
        explanation: 'We hop from node to node in memory until we hit a NULL pointer, indicating the end.',
        solution: `#include <iostream>\nusing namespace std;\n\nstruct ListNode {\n    int val;\n    ListNode* next;\n    ListNode(int x) : val(x), next(NULL) {}\n};\n\nint main() {\n    int n; cin >> n;\n    ListNode* head = NULL;\n    ListNode* tail = NULL;\n    for(int i=0; i<n; i++) {\n        int x; cin >> x;\n        ListNode* node = new ListNode(x);\n        if(!head) head = tail = node;\n        else { tail->next = node; tail = node; }\n    }\n    \n    ListNode* curr = head;\n    while(curr != NULL) {\n        cout << curr->val << " ";\n        curr = curr->next;\n    }\n    return 0;\n}`,
        commonMistakes: ['Forgetting `curr = curr->next`, resulting in an infinite loop.'],
        timeComplexity: 'O(N)', spaceComplexity: 'O(1)', interviewRelevance: 'high', tags: ['linked lists']
    },
    {
        id: 'prob-16-02',
        levelId: 'level-16',
        title: 'Reverse a Linked List',
        type: 'coding',
        difficulty: 'medium',
        order: 2,
        description: `**Task:**\nGiven the \`head\` of a Linked List, reverse the direction of all the pointers, and then traverse and print the new list.\n\n*Pattern:* Three Pointers (\`prev\`, \`curr\`, \`next\`)`,
        whyThisMatters: 'This is the most asked Linked List interview question in history. It tests your ability to manipulate pointers without losing references.',
        concepts: ['pointer reversal'],
        prerequisites: ['linked lists'],
        learningObjectives: ['Safely manipulate pointers without dropping the rest of the list'],
        constraints: [],
        examples: [{ input: '5\n1 2 3 4 5', output: '5 4 3 2 1' }],
        testCases: [
            { id: 'tc1', input: '5\n1 2 3 4 5', expectedOutput: '5 4 3 2 1', hidden: false },
            { id: 'tc2', input: '1\n10', expectedOutput: '10', hidden: false }
        ],
        starterCode: `#include <iostream>\nusing namespace std;\n\nstruct ListNode {\n    int val;\n    ListNode* next;\n    ListNode(int x) : val(x), next(NULL) {}\n};\n\nint main() {\n    int n; cin >> n;\n    if (n==0) return 0;\n    ListNode* head = NULL;\n    ListNode* tail = NULL;\n    for(int i=0; i<n; i++) {\n        int x; cin >> x;\n        ListNode* node = new ListNode(x);\n        if(!head) head = tail = node;\n        else { tail->next = node; tail = node; }\n    }\n    \n    ListNode* prev = NULL;\n    ListNode* curr = head;\n    \n    // Implement Reverse\n    // while (curr != NULL) {\n    //     ...\n    // }\n    // Make sure to update 'head' to the new front!\n    \n    // Traversal (already written)\n    ListNode* temp = head;\n    while(temp != NULL) {\n        cout << temp->val << " ";\n        temp = temp->next;\n    }\n    return 0;\n}`,
        hints: ['Before you point `curr->next` to `prev`, you MUST save the real next node in a temporary variable (`nextTemp = curr->next`), otherwise you lose the rest of the list!'],
        howToThink: ['I am standing on `curr`. I want to point backwards to `prev`. But if I do that, the bridge forward is broken! So first, I ask my friend to stand on `curr->next`. Then I break my bridge and point backwards. Then I step to where my friend is.'],
        approach: 'Use prev, curr, and next_temp pointers to iteratively reverse links.',
        pseudocode: 'prev = null, curr = head\nwhile curr != null:\n    next_temp = curr.next\n    curr.next = prev\n    prev = curr\n    curr = next_temp\nhead = prev',
        explanation: 'We iteratively flip the arrow of the current node to point backwards, then slide all pointers one step forward.',
        solution: `#include <iostream>\nusing namespace std;\n\nstruct ListNode {\n    int val;\n    ListNode* next;\n    ListNode(int x) : val(x), next(NULL) {}\n};\n\nint main() {\n    int n; cin >> n;\n    if (n==0) return 0;\n    ListNode* head = NULL;\n    ListNode* tail = NULL;\n    for(int i=0; i<n; i++) {\n        int x; cin >> x;\n        ListNode* node = new ListNode(x);\n        if(!head) head = tail = node;\n        else { tail->next = node; tail = node; }\n    }\n    \n    ListNode* prev = NULL;\n    ListNode* curr = head;\n    while(curr != NULL) {\n        ListNode* nextTemp = curr->next;\n        curr->next = prev;\n        prev = curr;\n        curr = nextTemp;\n    }\n    head = prev;\n    \n    ListNode* temp = head;\n    while(temp != NULL) {\n        cout << temp->val << " ";\n        temp = temp->next;\n    }\n    return 0;\n}`,
        commonMistakes: ['Forgetting to save `curr->next` before overriding it.', 'Returning `curr` instead of `prev` at the end (`curr` will be NULL!).'],
        timeComplexity: 'O(N)', spaceComplexity: 'O(1)', interviewRelevance: 'high', tags: ['linked lists']
    }
];
