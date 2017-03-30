### 분류 결과에 대한 정확도 측정 방법
#### 분류기 성능 측정 지표 정리
- Accuracy
- Precision
- Recall
- Error Rate
- Sensitivity
- Specificity
- F measure

#### 정확도외 고려해야할 성능 지표 정리
- 속도
- 견고함
- 확장성
- 해석능력


#### 다양한 샘플링 방법들
- Holdout 우리가 원래 하던 그것
- 무작위 서브 샘플링: Holdout N 번 방법해서 적용함
- k-fold cross validation - 점층 10며ㅑㄴ 교차검증
- Leave-on-out
- 부트스트랩 - 주어진 훈련트플을 같은 확률의 독립시행으로 샘플링한다.
    - .632 ㅂ앙식
- 통계적 유의성 모델

#### 비용효율에 대한 검토
- Cost-Benefit Analysis

#### 정확도 검증 문제
- ROC 커브

#### Multi-Lable 분류 정확도 측정 지표
- 정리예정

### 분류 정확성 향시법
#### 앙상블 (Classifier Commitee)
- Ensemble - CPU 병렬처리 방법 구현
- Bagging - Bootstrap 으로 데이터 세트 Di를 생성, 데이터 세트 Di의 훈련결과 Model i를
  생성하고 이를 가지고 결과물을 판단함함- Boosting
- AdaBoost
- Random Forest

#### 분류 정확성을 향상 시키는 n 방법
- 데이터 자체를 좋은 데이터를 쓴다
- 효과성이 높은 모델을 쓴다
- Feature Engineearing
- 앙상블등 다양한 모델을 적용함


#### Class imbalance problme
- Label이 일반적으로 한 쪽에 치우쳐져 있을 경우
- 아예 새로운 지표가 필요함 ROC 커브
- Oversampling
    - SMOTE 알고리즘 가상의 튜플을 추가로 만들어서 함
- Undersampling
- Threshold moving
- Ensemble techniques
- 
