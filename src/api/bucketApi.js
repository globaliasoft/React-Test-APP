
class bucketApi {
    static fetchBuckets() {
        return fetch(`http://roadmapservice.azurewebsites.net/api/buckets`, {
            method: 'get',
        }).then(function (response) {
            return response.json();
        }).catch(function (error) {
                throw error;
        });
    }
}

export default bucketApi;