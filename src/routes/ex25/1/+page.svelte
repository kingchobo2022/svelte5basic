<script>
    let hobbies = $state([]); 
    let gender = $state('미선택');
</script>

<h3>취미 선택 (다중)</h3>
<label><input type="checkbox" bind:group={hobbies} value="축구"> 축구</label>
<label><input type="checkbox" bind:group={hobbies} value="야구"> 야구</label>
<label><input type="checkbox" bind:group={hobbies} value="코딩"> 코딩</label>
<p>선택한 취미 : {hobbies.join(', ')}</p>

<hr />

<h3>성별 선택 (단일)</h3>
<label><input type="radio" bind:group={gender} value="남성"> 남성</label>
<label><input type="radio" bind:group={gender} value="여성"> 여성</label>
<p>선택한 성별 : {gender}</p>
