package com.marcio.exercise.error;

public class ErrorDetails {

    private String title;
    private int status;
    private String detail;
    private long timestamp;
    private String developerMessage;

    private ErrorDetails() {
    }

    public String getTitle() {
        return title;
    }

    public int getStatus() {
        return status;
    }

    public String getDetail() {
        return detail;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public String getDeveloperMessage() {
        return developerMessage;
    }

    public static final class Builder {
        private String title;
        private int status;
        private String detail;
        private long timestamp;
        private String developerMessage;

        private Builder() {
        }

        public static Builder getInstance(){
            return new Builder();
        }

        public Builder title(String title){
            this.title = title;
            return this;
        }

        public Builder status(int status){
            this.status = status;
            return this;
        }

        public Builder detail(String detail){
            this.detail = detail;
            return this;
        }

        public Builder timestamp(long timestamp){
            this.timestamp = timestamp;
            return this;
        }

        public Builder developerMessage(String developerMessage){
            this.developerMessage = developerMessage;
            return this;
        }

        public ErrorDetails build(){
            ErrorDetails errorDetails = new ErrorDetails();
            errorDetails.timestamp = this.timestamp;
            errorDetails.title = this.title;
            errorDetails.status = this.status;
            errorDetails.detail = this.detail;
            errorDetails.developerMessage = this.developerMessage;
            return errorDetails;
        }

    }


}
