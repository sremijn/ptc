<script>
	import Score from "../components/score.svelte";
	import Question from "../components/question.svelte";
</script>

<Score score={14} />

<Question
	number={1}
	answer1="First answer"
	answer2="Second answer"
	answer3="Third answer"
	answer4="Fourth answer"
	answer="c"
>
	This is my new question?
</Question>
