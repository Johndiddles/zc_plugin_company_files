const router = require('express').Router();

const {
  fileUpload,
  fileUploadRequest,
  fileUploadStatus,
  fileRename,
  fileUpdate,
  fileDetails,
  fileDelete,
  getAllFiles,
  getArchivedFiles,
  searchByDate,
  searchStarredFiles,
  searchFileByIsDeleted,
  getAllDeletedFiles,
  isDuplicate,
  getAllDuplicates,
  setEditPermission,
  searchBySize,
  searchByType
} = require('../controllers/file.controller');

// FILE UPLOAD REQUEST
router.post('/uploadRequest', fileUploadRequest);

// FILE UPLOAD STATUS
router.get('/uploadStatus', fileUploadStatus);

// UPLOAD A NEW FILE/FILES
router.post('/upload', fileUpload);

// GET ALL THE FILES FROM THE ENDPOINT
router.get('/all', getAllFiles);

// SEARCH FOR ALL DELETED FILES
router.get('/searchByisDeleted', searchFileByIsDeleted);

// GET A SINGLE FILE DETAILS
router.get('/read/:id', fileDetails);

// Renames file
router.post('/rename/:id', fileRename);

// GET ARCHIVED FILES
router.get('/archive', getArchivedFiles);

// SEARCH FILES BY DATE ADDED
router.get('/searchByDate', searchByDate);

// SEARCH STARRED FILES
router.get('/searchStarredFiles', searchStarredFiles)

// SEARCH FILES BY SIZE
router.get('/searchBySize/:size', searchBySize)

// GET DELETED FILES
router.get('/deletedFiles', getAllDeletedFiles)

// CHECK IF FILE IS A DUPLICATE
router.post('/isDuplicate', isDuplicate);

// GET DUPLICATE FILES
router.get('/duplicateFiles', getAllDuplicates);
router.route('/write/:id')
  .put(fileUpdate)
  .delete(fileDelete)

router.route('/write/:admin')
  .put(fileUpdate)
  .delete(fileDelete)

// SET EDIT PERMISSION
router.get('/setEdit/:admin', setEditPermission)

// SEARCH FILES BY FILE TYPE
router.get('/searchByType', searchByType);

module.exports = router;
