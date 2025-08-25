// src/data/quiz.js
const quizData = [
    {
        question: "Reactの主な特徴はどれ？",
        options: [
            "サーバーサイドレンダリングのみ可能",
            "UI構築のためのライブラリ",
            "Javaのフレームワーク",
            "データベース管理ツール"
        ],
        answerIndex: 1
    },
    {
        question: "コンポーネントの状態を管理するフックはどれ？",
        options: [
            "useEffect",
            "useState",
            "useContext",
            "useReducer"
        ],
        answerIndex: 1
    },
    {
        question: "Reactで副作用を処理するフックはどれ？",
        options: [
            "useEffect",
            "useState",
            "useMemo",
            "useCallback"
        ],
        answerIndex: 0
    },
    {
        question: "JSXで変数を埋め込むときの記法は？",
        options: [
            "{変数名}",
            "(変数名)",
            "<変数名>",
            "$変数名"
        ],
        answerIndex: 0
    },
];

export default quizData;