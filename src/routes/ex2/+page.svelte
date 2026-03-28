<script>
    let score = $state(0);

    function addScore() {
        if (score < 100) score += 10;
    }
    function resetScore() {
        score = 0;
    }
</script>

<div class="container">
    <h1>나의 성적표</h1>
    <p>현재 점수 : <strong>{score}점</strong></p>

    <button onclick={addScore}>10점 올리기</button>
    <button onclick={resetScore}>점수 초기화</button>
    <hr>
    <div class="result">
        {#if score >= 90}
            <h2 class="grade-a">등급 : A</h2>
        {:else if score >= 70}    
            <h2 class="grade-b">등급 : B</h2>
        {:else if score >= 40}    
            <h2 class="grade-c">등급 : C</h2>
        {:else}    
            <h2 class="grade-f">등급 : F</h2>
        {/if}
    </div>
</div>

<style>
    .container {
        text-align: center;
        padding: 20px;
        font-family: 'sans-serif';
    }
    button {
        padding: 10px 20px;
        font-size: 1rem;
        cursor: pointer;
        margin: 5px;
    }
    .result {
         margin-top: 20px;
         padding: 15px;
         border-radius: 10px;
         background-color: #f9f9f9;
    }
    .grade-a { color : #2ecc71; }
    .grade-b { color : #3498db; }
    .grade-c { color : #f39c12; }
    .grade-f { color : #e74c3c; }

</style>