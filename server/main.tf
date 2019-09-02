provider "aws" {
  region                  = "us-east-2"
  shared_credentials_file = "/Users/josephbowler/Documents/practice/aws/src/server/snake.pem"
}

resource "aws_instance" "webserver" {
  ami           = "ami-0d8f6eb4f641ef691"
  instance_type = "t2.micro"
}
