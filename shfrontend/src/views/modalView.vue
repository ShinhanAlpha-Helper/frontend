<template>
  <div class="page">
    <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
          <!-- <h1 class="modal-title fs-5" id="exampleModalToggleLabel">검색창</h1> -->
            <div class="mb-3">
              <label for="message-text" class="col-form-label">검색창</label>
              <textarea class="form-control" id="message-text"></textarea>
            </div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">검색</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">단어</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            단어뜻
          </div>
          <div class="modal-footer">
            <button class="btn btn-primary" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal">단어장에 추가</button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalToggleLabel3">단어장에추가</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            단어장에 추가되었습니다.
          </div>
          <div class="modal-footer">
            <router-link to="/vocamain"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal">단어장으로 가기</button></router-link>
          </div>
        </div>
      </div>
    </div>
    <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">btn</a>
    <!-- <i class="btn bi bi-search"></i> -->
  </div>
</template>

<script>
export default {
  methods: {
    vacaAdd() {
      alert("단어장에 추가되었습니다");
    }
  }
}
</script>

<style scoped>
.modal-dialog.modal-dialog-centered {
  display: inline-block;
  text-align: left;
  width: 250px;
  /* vertical-align: middle;  */
}



.modal.fade1{
  /* width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  text-align: top; */
  text-align: center;
}

</style>