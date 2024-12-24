function handler(event) {
    var request = event.request;
    var uri = request.uri;
    
    // Check if this is a file request
    if (uri.includes('.')) {
        return request;
    }
    
    // Rewrite to index.html for client-side routing
    request.uri = '/index.html';
    return request;
}