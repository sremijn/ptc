/**
 * @type {{
 *  question: string,
 *  answers: [ string, string ] | [ string, string, string ] | [ string, string, string, string ],
 *  correct: number,
 *  time: number
 * }[] }
 */
export const questions = [
    {
        question: "This is the first question.",
        answers: [
            "True",
            "False"
        ],
        correct: 0,
        time: 20
    },
    {
        question: "Who made this question?",
        answers: [
            "Ben Thomas",
            "Mr. Bonner",
            "Sam Mote",
            "Camryn Verhey"
        ],
        correct: 1,
        time: 20
    },
    {
        question: "How much time is left in this class?",
        answers: [
            "So much",
            "A respectable amount",
            "Not enough"
        ],
        correct: 2,
        time: 20
    }
]
