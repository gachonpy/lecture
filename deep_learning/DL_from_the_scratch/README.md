## Keywords and Concepts

### 미니배치
- MiniBatch를 사용할 때 이상적으로 이상적으로, 10 개의 클래스를 말하면, 미니 배치의 각 클래스에서 정확히 동일한 번호를 가진 10 개의 예제를 포함하는 것이 좋음
- 미니 배치는 같은 수의 데이터가 같은 비율로 들어가 있는 것이 좋음

### 언제 학습을 멈출 것인가
- 더 이상 학습해도 테스트 셋의 오차가 줄어들지않을 경우 학습을 멈추게 할 수 있음

### shifting an input value
- 입력에 상수를 추가하면 속도가 빨라진다
- 가장 가파른 점을 사용할 때 상수를 추가하여 입력 값을 이동하면 매우 큰 차이가 발생할 수 있다.
- 

### Scailing the input value
- That actually works even better cause it's guaranteed to give you a circular error surface. 

### Turn down the learning rate
- I mentioned earlier that towards the end of learning, you should turn down the learning rate. 
- You should also be careful about turning down the learning rate too soon. 

### How to improve Learning Speed in Mini-Batch Process
- Mathmatical momentum
- Adaptive learning rates for each parameter
- rmsprop
- full batch learning. 

### Mementum
- That is, we make its velocity die off gently on each update. 
- rmsprop with Nesterov momentum
- Bengio 책 확인

### Adaptive learning rates (p306, Bengio Book)
- Delta-bar-delta algorithm(Jacobs, 1988)
- 만약 weight의 미분 값(Gradient?) 같은 sign이면 Learning Rate를 증가하고 반대이면 감소하는 Adaptive Learning Rates를 소개함

### RMSProp
- This gives you the advantages of rprop and it also gives you the advantage of mini-batch learning, which is essential for large, redundant data sets.
- Some gradients can be tiny and others can be huge. And that makes it hard to choose a single global learning rate. 
- rprop 찾아보기
- The efficiency that you get from many batches. And this averaging of gradients over mini-batches is what allows mini-batches to combine gradients in the right way. 
- And the reason it has problems with mini-batches is that we divide the gradient by a different magnitude for each mini batch.
- rmsprop with Nesterov momentum
- And when you report the results in your paper you just have to say, I used this package and here's what it did. 

### How to choose Gradient Descent Algorithm
- Full-batch method: Small data or Big data without redundancy 
    - conjugate gradient
    - lbfgs
    - LevenbergMarkhart
    - Marquardt
    - adaptive learning rates
    - rprop
- Mini-batch method
    - gradient descent with momentum
    - RMSProp
- There's really two reasons I think why there isn't a simple recipe.(By Hinton)
    - First, neural nets differ a lot.
        - Very deep networks, especially ones that have narrow bottlenecks in them, which I'll come to in later lectures, are very hard things to optimize and they need methods that can be very sensitive to very small gradients.
    - 


### Size of Data?
- small data set, say 10,000 cases or less (Hinton Said)
- How to find duplicated data
    - http://stats.stackexchange.com/questions/15581/how-to-find-duplicate-cases-in-a-large-dataset
    - http://stackoverflow.com/questions/26220478/find-duplicate-records-in-large-table-on-multiple-columns-the-right-way
    - https://en.wikipedia.org/wiki/Data_redundancy
    - https://en.wikipedia.org/wiki/Data_deduplication
